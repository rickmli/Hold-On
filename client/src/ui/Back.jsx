import { useNavigate } from "react-router-dom";

function Back() {
  const navigate = useNavigate();

  return (
    <a
      onClick={() => navigate(-1)}
      className="mb-1 block cursor-pointer text-black hover:text-gray-500"
    >
      &larr; Go Back
    </a>
  );
}

export default Back;
