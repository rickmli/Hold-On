const getPosts = async function () {
  const response = await fetch("http://localhost:3001/posts");
  return response.json();
};
