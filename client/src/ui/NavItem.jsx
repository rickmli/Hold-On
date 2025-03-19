import { Link } from "react-router-dom";

function NavItem({ route, routeName }) {
  return (
    <li>
      <Link to={route} className="hover:text-teal-500 hover:underline">
        {routeName}
      </Link>
    </li>
  );
}

export default NavItem;
