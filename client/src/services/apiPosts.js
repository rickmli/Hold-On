import { FAKEPOSTS } from "../utils/constants";
const getPosts = async function () {
  // const response = await fetch("http://localhost:3001/posts");
  // return response.json();
  const posts = FAKEPOSTS;
  return posts;
};
