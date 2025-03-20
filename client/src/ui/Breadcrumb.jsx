import { Link, useLocation, matchRoutes } from "react-router-dom";

import { ROUTES as routes } from "../utils/constants";

function Breadcrumb() {
  const location = useLocation();
  const isNotFound = !matchRoutes(routes, location); // 检查是否匹配路由
  const isHome = location.pathname === "/"; // 检查是否是首页

  if (isNotFound) return null; // 404 页面不显示 Breadcrumb

  // 解析路径
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav
      className="mb-2 flex items-center text-sm font-medium"
      aria-label="Breadcrumb"
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

export default Breadcrumb;
