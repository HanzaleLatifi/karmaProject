import React, { useEffect, useState } from "react";
import { getAllpost } from "../services/getPosts";
import ReactPaginate from "react-paginate";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import PostCard from "../components/Card/PostCard";
import SearchInput from "../components/Input/SearchInput";
import Loading from "../components/Loading/Loading";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [AllPosts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 10;
  const pagesVisited = currentPage * postsPerPage;
  const pageCount = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    getAllpost()
      .then((res) => {
        setAllPosts(res.data);
        setPosts(res.data);
      })
      .catch((err) => {});
  }, []);

  const displayposts = posts.length > 0 ?
    posts.slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => {
      return (
        <PostCard
          key={post.id}
          post={post}
        />
      );
    }) : <Loading/>

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mx-auto px-4 md:p-0  ">
      <SearchInput posts={AllPosts} onSetPosts={setPosts} />
      <section className="grid md:grid-cols-4 grid-cols-1 gap-x-6 gap-y-16">
        {displayposts}
      </section>
      {pageCount > 0 && (
        <ReactPaginate
          pageRangeDisplayed={1}
          previousLabel={<GrFormPrevious />}
          nextLabel={<GrFormNext />}
          pageCount={pageCount}
          onPageChange={changePage}
          pageClassName="h-8 w-8 flex justify-center items-center rounded-full "
          containerClassName=" flex justify-center gap-x-2 md:gap-x-6 my-16 "
          previousLinkClassName="h-8 w-8 flex justify-center items-center rounded-full bg-gray-200"
          nextLinkClassName="h-8 w-8 flex justify-center items-center rounded-full bg-gray-200"
          activeClassName="h-8 w-8 flex justify-center items-center rounded-full bg-primary-purple text-white"
        />
      )}
    </div>
  );
}

export default HomePage;
