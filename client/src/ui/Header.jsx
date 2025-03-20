import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
        <h1 className="text-2xl font-bold">
          <Link to="/">Hold On</Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
