import { Link } from "react-router-dom";
import useNav from "../hooks/useNav";

function NavItem({ route, routeName }) {
  const { setActiveNav, activeNav } = useNav();

  // 修改 onClick 处理方式，使用箭头函数
  const handleClick = () => {
    setActiveNav(routeName);
  };

  return (
    <li>
      <Link
        to={route}
        className={`hover:text-teal-500 hover:underline ${activeNav === routeName ? "text-teal-500" : ""}`}
        onClick={handleClick} // 使用封装好的函数
      >
        {routeName}
      </Link>
    </li>
  );
}

export default NavItem;
