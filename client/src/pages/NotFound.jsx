import { Link } from "react-router-dom";
import PageDescription from "../ui/PageDescription";

function NotFound() {
  return (
    <>
      <PageDescription
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
