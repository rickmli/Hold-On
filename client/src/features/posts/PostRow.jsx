import { motion } from "framer-motion";
import Tags from "../../ui/Tags";
import { formateDate, truncateText } from "../../utils/helpers";

function PostRow({ post }) {
  const title = truncateText(post.title, 35);
  const tags = post.tags;
  const createdAt = formateDate(post.createdAt);
  // const updatedAt = formateDate(post.updatedAt);

  return (
    <li className="group">
      {/* Apply group class here to manage hover on the entire li */}
      <motion.div
        className="z-20 gap-4 rounded-lg bg-gray-100 p-3.5 shadow-md"
        // layoutId={`post-container-${post.slug}`} // Set layoutId for smooth transition
        transition={{
          duration: 0.8, // Adjust this to control the speed (in seconds)
          ease: [0.25, 0.8, 0.25, 1], // Smooth ease-in-out transition
        }}
      >
        {/* 标题 */}
        <div className="flex w-full flex-col justify-between">
          <div className="flex h-full flex-col">
            {/* Using motion.h2 for the title with transition */}
            <motion.h2
              // layoutId={`post-title-${post.slug}`} // Set layoutId for smooth transition
              className="text-md font-semibold text-gray-800 group-hover:text-emerald-700" // Tailwind CSS hover effect
              transition={{
                duration: 0.8, // Adjust this to control the speed (in seconds)
                ease: [0.25, 0.8, 0.25, 1], // Smooth ease-in-out transition
              }}
            >
              {title}
            </motion.h2>
            <Tags fontOption="xs" gapOption={2} tags={tags} />
          </div>
          <p className="text-xs text-gray-600">{createdAt}</p>
        </div>
      </motion.div>
    </li>
  );
}

export default PostRow;
