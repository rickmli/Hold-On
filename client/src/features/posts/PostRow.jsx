import { motion } from "framer-motion";
import Tags from "../../ui/Tags";
import { truncateText } from "../../utils/helpers";

function PostRow({ post }) {
  return (
    <li className="flex gap-4 rounded-lg bg-gray-100 p-3.5 shadow-md">
      {/* 左侧图片 */}
      <motion.img
        src={post.image}
        alt={post.title}
        layoutId={`post-image-${post.slug}`} // Set layoutId for smooth transition
        transition={{
          duration: 0.8, // Adjust this to control the speed (in seconds)
          ease: [0.25, 0.8, 0.25, 1], // Smooth ease-in-out transition
        }}
        className="h-20 min-h-20 w-20 min-w-20 rounded-lg object-cover"
      />
      {/* 右侧标题 */}
      <div className="flex w-full flex-col justify-between">
        <div className="flex h-full flex-col">
          {/* Using motion.h2 for the title with transition */}
          <motion.h2
            layoutId={`post-title-${post.slug}`} // Set layoutId for smooth transition
            className="text-md font-semibold text-gray-800"
            transition={{
              duration: 0.8, // Adjust this to control the speed (in seconds)
              ease: [0.25, 0.8, 0.25, 1], // Smooth ease-in-out transition
            }}
          >
            {truncateText(post.title, 35)}
          </motion.h2>
          <Tags fontOption="xs" gapOption={2} tags={post.tags} />
        </div>
        <p className="text-xs text-gray-600">2024-05-06</p>
      </div>
    </li>
  );
}

export default PostRow;
