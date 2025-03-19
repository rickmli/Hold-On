import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-1/2">
        <main>
          <Outlet />
        </main>
      </div>
      <footer>Footer</footer>
    </>
  );
}

export default AppLayout;
