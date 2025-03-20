import Back from "../../ui/Back";
import Tags from "../../ui/Tags";

function PostDetail({ post }) {
  return (
    <>
      <Back />
      <div className="mx-auto max-w-3xl p-4">
        {/* 文章封面图 */}
        <img
          src={post.image}
          alt={post.title}
          className="mb-6 h-60 w-full scale-105 rounded-lg object-cover"
        />

        {/* 标题 & Tags & 日期 */}
        <h2 className="mb-2 text-3xl font-bold text-emerald-700">
          {post.title}
        </h2>
        <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
          <Tags tags={post.tags} gapOption={3} fontOption={"sm"} />
          <time dateTime="2025-03-18">March 18, 2025</time>
        </div>

        {/* 正文内容 */}
        <p className="leading-relaxed text-gray-700">{post.content}</p>
      </div>
    </>
  );
}

export default PostDetail;
