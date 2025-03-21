const PORT = "http://localhost:5001";
const NAVS = {
  home: {
    linkTo: "/",
    name: "Home",
    icon: "",
    isPrivate: false,
  },
  post: {
    linkTo: "/post",
    name: "Posts",
    icon: "",
    isPrivate: false,
  },
  tag: {
    linkTo: "/tag",
    name: "Tags",
    icon: "",
    isPrivate: false,
  },
  archives: {
    linkTo: "/archive",
    name: "Archives",
    icon: "",
    isPrivate: false,
  },
  about: {
    linkTo: "/about",
    name: "About",
    icon: "",
    isPrivate: false,
  },
  search: {
    linkTo: "/search",
    name: "Search",
    icon: "",
    isPrivate: false,
  },
};

const ROUTES = [
  { path: "/" },
  { path: "/about" },
  { path: "/post" },
  { path: "/post/:postSlug" },
  { path: "/tag" },
  { path: "/tag/:tagName" },
  { path: "/archive" },
  { path: "/search" },
  { path: "*" },
];

export { PORT, NAVS, ROUTES };
