import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import React from "react";
import { getPost } from "../services/getPosts";

const PostPage = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState("");

  useEffect(() => {
    setPostData("");
    getPost(id).then((res) => {
      setPostData(res.data);
    });
  }, [id]);

  return (
    <section className="container md:max-w-3xl mx-auto p-4 mb-8 border-dashed border-2 rounded-lg">
      <div className="flex md:flex-row flex-col justify-between items-center p-3  w-full border-b-2 border-primary-yellow pb-4 mb-6 ">
        <div className=" w-1/2 rounded-lg overflow-hidden mb-4  ">
          <img src={`/images/${postData.userId}.jpg`} alt="avatar" className="cover" />
        </div>
        <div className="flex flex-col items-center justify-between h-full ">
          <h2 className=" font-bold  text-center mb-1">{postData.title}</h2>
          <p className="text-lg mb-2 text-center">{postData.body}</p>
        </div>
      </div>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
           The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
    </section>
  );
};

export default PostPage;
