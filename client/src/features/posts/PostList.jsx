import React from "react";
import PostRow from "./PostRow";
import { Link } from "react-router-dom";
import { generateFakePosts } from "../../utils/helpers";

const PostList = () => {
  const fakePosts = generateFakePosts(3);
  return (
    <ul className="flex flex-col space-y-3">
      {fakePosts.map((post, index) => (
        <Link to={`/post/${post.slug}`} key={index}>
          <PostRow key={index} post={post} />
        </Link>
      ))}
    </ul>
  );
};

export default PostList;
