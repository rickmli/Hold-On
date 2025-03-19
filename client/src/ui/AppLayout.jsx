import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default AppLayout;
