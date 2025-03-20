import React from "react";
import PostRow from "./PostRow";
import { Link } from "react-router-dom";
import { FAKEPOSTS as posts } from "../../utils/constants";

const PostList = () => {
  return (
    <ul className="flex flex-col space-y-3">
      {posts.map((post, index) => (
        <Link to={`/post/${post.slug}`} key={index}>
          <PostRow key={index} post={post} />
        </Link>
      ))}
    </ul>
  );
};

export default PostList;
