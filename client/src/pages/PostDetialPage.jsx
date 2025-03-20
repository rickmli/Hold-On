import PostDetail from "../features/posts/PostDetail";
import { generateFakePosts } from "../utils/helpers";

function PostDetailPage() {
  const fakePost = generateFakePosts(1)[0];
  return (
    <>
      <PostDetail post={fakePost} />
    </>
  );
}

export default PostDetailPage;
