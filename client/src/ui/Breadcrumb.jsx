import { Link, useLocation, matchRoutes } from "react-router-dom";
import usePathnames from "../hooks/usePathname";
import { ROUTES } from "../utils/constants";

function breadcrumb() {
  const routes = ROUTES;
  const pathnames = usePathnames();
  const isHome = pathnames.length === 0;

  // if (isNotFound) return null; // 404 页面不显示 breadcrumb

  return (
    <nav
      className="mb-2 flex items-center text-sm font-medium"
      aria-label="breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {/* 首页 */}
        <li className="flex items-center gap-2">
          {isHome ? (
            <span aria-current="page" className="text-gray-900">
              Home
            </span>
          ) : (
            <Link to="/" className="text-gray-400 hover:text-blue-400">
              Home
            </Link>
          )}
          {pathnames.length > 0 && <span>&gt;</span>}
        </li>

        {/* 生成面包屑 */}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={routeTo} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-gray-900">
                  {name}
                </span>
              ) : (
                <>
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-blue-400"
                  >
                    {name}
                  </Link>
                  <span>&gt;</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default breadcrumb;
