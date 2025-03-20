import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto my-8 max-w-1/2">
          <Breadcrumb />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
