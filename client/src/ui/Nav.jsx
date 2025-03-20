import NavItem from "./NavItem";
import { NAVS as navs } from "../utils/constants";
function Nav() {
  return (
    <nav>
      <ol className="flex space-x-4">
        {Object.values(navs).map((nav) => (
          <NavItem key={nav.name} route={nav.linkTo} routeName={nav.name} />
        ))}
      </ol>
    </nav>
  );
}

export default Nav;
