import Tags from "../../ui/Tags";
import { truncateText } from "../../utils/helpers";

function PostRow({ post }) {
  return (
    <li className="flex gap-4 rounded-lg bg-gray-100 p-3.5 shadow-md">
      {/* 左侧图片 */}
      <img
        src={post.image}
        alt={post.title}
        className="h-20 min-h-20 w-20 min-w-20 rounded-lg object-cover"
      />
      {/* 右侧标题 */}
      <div className="flex w-full flex-col justify-between">
        <div className="flex h-full flex-col">
          <h2 className="text-md font-semibold text-gray-800">
            {truncateText(post.title, 35)}
          </h2>
          <Tags fontOption="xs" gapOption={2} tags={post.tags} />
        </div>
        <p className="text-xs text-gray-600">2024-05-06</p>
      </div>
    </li>
  );
}

export default PostRow;
