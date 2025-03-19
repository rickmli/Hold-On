import NavItem from "./NavItem";

function Nav() {
  return (
    <nav>
      <ol className="flex space-x-4">
        <NavItem route="/tag" routeName="Tags" />
        <NavItem route="/about" routeName="About" />
        <NavItem route="/post" routeName="Posts" />
        <NavItem route="/search" routeName="Search" />
        <NavItem route="/archives" routeName="Archives" />
      </ol>
    </nav>
  );
}

export default Nav;
