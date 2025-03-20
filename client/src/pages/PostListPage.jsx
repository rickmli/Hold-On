import PostList from "../features/posts/PostList";
import PageDescription from "../ui/PageDescription";

function PostListPage() {
  return (
    <>
      <PageDescription title="Post" description="All articles I've posted." />
      <PostList />
    </>
  );
}

export default PostListPage;
