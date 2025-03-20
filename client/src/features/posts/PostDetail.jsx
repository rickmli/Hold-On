function PostDetail({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <img src={post.image} alt={post.title} />
      <p>Tags: {post.tags.join(", ")}</p>
    </div>
  );
}

export default PostDetail;
