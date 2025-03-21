import { useLocation } from "react-router-dom";

const usePathnames = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return pathnames;
};

export default usePathnames;
