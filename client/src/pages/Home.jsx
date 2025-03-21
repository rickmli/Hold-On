import RouteDescription from "../ui/RouteDescription";
import { getToday } from "../utils/helpers";

function Home() {
  return (
    <>
      <RouteDescription title="Home" description="Welcome to my blog." />
      <span>Home</span>
    </>
  );
}

export default Home;
