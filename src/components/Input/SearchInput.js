import { useState } from "react";
import { BiSearch } from "react-icons/bi";

function SearchInput({ posts, onSetPosts }) {
  const [serachValue, setSerachValue] = useState("");

  const searchHandler = (e) => {
    setSerachValue(e.target.value);
    const search = e.target.value;
    if (search !== "") {
      const filtered = posts.filter((post) => {
        return post.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      onSetPosts(filtered);
    } else {
      onSetPosts(posts);
    }
  };

  return (
    <div className="flex items-center bg-white rounded-lg mb-20 md:mb-24 overflow-hidden w-full md:w-1/3 mx-auto shadow-md">
      <input
        placeholder="search here ..."
        value={serachValue}
        onChange={searchHandler}
        className="p-2 outline-none border-none w-full "
      />
      <BiSearch className="text-5xl p-3 text-white cursor-pointer bg-primary-purple    " />
    </div>
  );
}

export default SearchInput;
