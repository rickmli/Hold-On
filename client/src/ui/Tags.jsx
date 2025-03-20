import { capitalizeFirstLetter } from "../utils/helpers";

function Tags({ fontOption, gapOption, tags }) {
  const fontSizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };
  const gapSizes = { 1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4" };

  return (
    <ul className={`flex ${gapSizes[gapOption]}`}>
      {tags.map((tag, index) => {
        return (
          <li key={index} className={fontSizes[fontOption]}>
            {capitalizeFirstLetter(tag)}
          </li>
        );
      })}
    </ul>
  );
}

export default Tags;
