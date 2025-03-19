import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="">
      <h1 className="">404 Page Not Found</h1>
      <p className="">
        This page cannot be found, please try another time or click{" "}
        <Link to="/" className="text-teal-500 hover:underline">
          here
        </Link>{" "}
        to go back to the home page
      </p>
    </div>
  );
}

export default NotFound;
