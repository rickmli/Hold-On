import { Link } from "react-router-dom";
import RouteDescription from "../ui/RouteDescription";

function NotFound() {
  return (
    <>
      <RouteDescription
        title="404 Page Not Found"
        description="This page cannot be found, please try another time"
      />
      <Link to="/" className="text-teal-500 hover:underline">
        Back to Home
      </Link>
    </>
  );
}

export default NotFound;
