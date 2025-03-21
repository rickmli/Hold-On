import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Back from "../../ui/Back";
import Tags from "../../ui/Tags";
import { FAKEPOSTS as posts } from "../../utils/constants";

function PostDetailPage() {
  const { postSlug } = useParams(); // Use postSlug from URL parameters to fetch the correct post
  const {
    title,
    content,
    tags,
    image,
    slug,
    createdAt = formateDate(createdAt),
  } = posts.find((post) => post.slug === postSlug); // Find the post based on the slug

  if (!title) return <p>Post not found!</p>;

  return (
    <>
      <Back />
      <motion.div
        className="z-20 mx-auto max-w-3xl rounded-lg bg-gray-100 p-6 shadow-md"
        // layoutId={`post-container-${post.slug}`} // Set layoutId for smooth transition
        transition={{
          duration: 0.8, // Adjust this to control the speed (in seconds)
          ease: [0.25, 0.8, 0.25, 1], // Smooth ease-in-out transition
        }}
      >
        {/* 让标题平滑过渡 */}
        <motion.h1
          // layoutId={`post-title-${post.slug}`}
          className="mb-2 text-3xl font-bold text-emerald-700"
          transition={{
            duration: 0.8, // Adjust this to control the speed (in seconds)
            ease: [0.25, 0.8, 0.25, 1], // Ease-in-out for smoother transition
            delay: 0.05,
          }}
        >
          {title}
        </motion.h1>
        {/* 文章封面图 */}
        <motion.img
          src={image}
          alt={title}
          className="z-10 mb-6 h-60 w-full rounded-lg object-cover"
          layoutId={`post-image-${slug}`} // Set layoutId for smooth transition
          transition={{
            duration: 0.8, // Adjust this to control the speed (in seconds)
            ease: [0.25, 0.8, 0.25, 1], // Ease-in-out for smoother transition
            delay: 0.05,
          }}
        />

        <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
          <Tags tags={tags} gapOption={3} fontOption={"sm"} />
          <time dateTime="2025-03-18">March 18, 2025</time>
        </div>

        {/* 正文内容 */}
        <p className="leading-relaxed text-gray-700">{content}</p>
      </motion.div>
    </>
  );
}

export default PostDetailPage;
