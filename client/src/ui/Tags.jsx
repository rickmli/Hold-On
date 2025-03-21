import { Link } from "react-router-dom";
import { capitalize } from "../utils/helpers";
import clsx from "clsx";

// 提取外部常量
const FONT_SIZE_MAP = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

const GAP_SIZE_MAP = {
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
};

const BG_COLOR_MAP = {
  yellow: "bg-yellow-500",
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
};

function Tags({ fontSizeOption = "md", gapSizeOption = "3", tags = [] }) {
  const fontSize = FONT_SIZE_MAP[fontSizeOption] || FONT_SIZE_MAP.md;
  const gapSize = GAP_SIZE_MAP[gapSizeOption] || GAP_SIZE_MAP[3];

  return (
    <ul className={clsx("inline-flex", gapSize, fontSize)}>
      {tags.map(({ name: tagName, color: bgColorOption }, index) => (
        <li key={index}>
          <Link
            routeTo={`/tags/${tagName}`}
            className="text-white hover:text-black hover:underline"
          >
            <span
              className={clsx(
                "rounded-full px-3 py-1.5",
                BG_COLOR_MAP[bgColorOption] || "bg-gray-500",
              )}
            >
              {capitalize(tagName)}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Tags;
