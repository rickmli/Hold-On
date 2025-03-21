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

// 更新后的 PADDING_MAP，采用数字作为键
const PADDING_MAP = {
  0: "p-0",
  1: "px-1 py-0.5",
  2: "px-2 py-1",
  3: "px-3 py-1.5",
  4: "px-4 py-2",
};

const FONT_COLOR_MAP = {
  white: "text-white",
  black: "text-black",
  gray: "text-gray-500",
  red: "text-red-500",
  blue: "text-blue-500",
  green: "text-green-500",
  yellow: "text-yellow-500",
  purple: "text-purple-500",
};

const BG_COLOR_MAP = {
  yellow: "bg-yellow-500",
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  gray: "bg-gray-500",
};

function Tags({
  fontSizeOption = "md",
  gapSizeOption = 3,
  paddingOption = 2,
  tags = [],
  useBgColor = true,
  useFontColor = true,
}) {
  const fontSize = FONT_SIZE_MAP[fontSizeOption] || FONT_SIZE_MAP.md;
  const gapSize = GAP_SIZE_MAP[gapSizeOption] || GAP_SIZE_MAP[3];
  const padding = PADDING_MAP[paddingOption] || PADDING_MAP[2];

  return (
    <ul className={clsx("inline-flex flex-wrap", gapSize, fontSize)}>
      {tags.map(({ name: tagName, color: colorOption }, index) => {
        const fontColor = useFontColor
          ? FONT_COLOR_MAP[colorOption] || FONT_COLOR_MAP.white
          : FONT_COLOR_MAP.white;

        const bgColor = useBgColor
          ? BG_COLOR_MAP[colorOption] || BG_COLOR_MAP.gray
          : "bg-transparent";

        return (
          <li key={index} className="inline-flex">
            <Link
              to={`/tag/${tagName}`}
              className="hover:text-black hover:underline"
            >
              <span
                className={clsx(
                  "inline-flex items-center rounded-full whitespace-nowrap",
                  padding,
                  fontColor,
                  bgColor,
                  fontSize,
                )}
              >
                {capitalize(tagName)}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Tags;
