import PostList from "../features/posts/PostList";
import RouteDescription from "../ui/RouteDescription";

function PostListPage() {
  return (
    <>
      <RouteDescription title="Post" description="All articles I've posted." />
      <PostList />
    </>
  );
}

export default PostListPage;
