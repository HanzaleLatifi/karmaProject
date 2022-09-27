import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../components/Card/PostCard";

function FavoritePage() {
  const myFavorites = useSelector((state) => state.favorites.favorites);
  console.log(myFavorites);

  return (
    <div className="container mx-auto px-4 md:p-0 mt-20">
      <section className="grid md:grid-cols-4 grid-cols-1 gap-x-6 gap-y-16 ">
        {myFavorites.length > 0 ? (
          myFavorites.map((post) => {
            return <PostCard post={post} key={post.id} />;
          })
        ) : (
          <p className="col-span-full text-center font-bold">
            your favorite post is empty ... !
          </p>
        )}
      </section>
    </div>
  );
}

export default FavoritePage;
