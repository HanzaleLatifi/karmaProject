import {useEffect , useRef} from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { favoriteHandler } from "../../feature/Favorite/FavoriteSlice";
import { gsap } from "gsap";



function PostCard({ post}) {

  const boxRef = useRef();

  const myFavorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const likeHandler = (post) => {
      dispatch(favoriteHandler(post));
  };

  useEffect(() => {
  }, [myFavorites,dispatch]);


  useEffect(() => {
    gsap.fromTo(boxRef.current, {rotationY:'90'} , {rotateY:'0', duration: 1.3});
  }, []);

 

  const checkIsLiked=(post)=> {
    const founder= myFavorites.findIndex(p=>p.id===post.id);
    if(founder>=0){
      return true
    }else{
      return false
    }
  }
  
  

  
  
  return (
    <div ref={boxRef} className="flex-col flex items-center  p-3 shadow-lg bg-white rounded-lg ">
      <div className="w-16 h-16 -mt-12 rounded-full overflow-hidden border-4 border-t-primary-yellow border-l-primary-yellow border-b-primary-purple border-r-primary-purple">
        <img src={`/images/${post.userId}.jpg`} alt="avatar" />
      </div>
      <div className="flex flex-col items-center justify-between h-full ">
        <h2 className=" font-semibold  text-center mb-1">{post.title}</h2>
        <p className="text-sm mb-2 text-center">{post.body}</p>
        <div className="flex w-full justify-between text-lg ">
          <button onClick={() => likeHandler(post)} className="hover:scale-150 transition-all text-2xl">
            { checkIsLiked(post) ? (
              <AiFillHeart className="fill-red-500 cursor-pointer" />
            ) : (
              <AiOutlineHeart className="text-red-500 cursor-pointer" />
            )}
          </button>
          <Link to={`/posts/${post.id}`} className="text-primary-purple flex hover:tracking-wide transition-all">
            see more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
