import RouteDescription from "../ui/RouteDescription";
import Tags from "../ui/Tags";
import { FAKETAGS } from "../utils/fakeData";

function TagListPage() {
  const tags = FAKETAGS;
  return (
    <>
      <RouteDescription title="Tags" description="List of all tags." />
      <Tags
        fontSizeOption="md"
        gapSizeOption={3}
        tags={tags}
        paddingOption="4"
        useBgColor={true}
        useFontColor={false}
      />
    </>
  );
}

export default TagListPage;
