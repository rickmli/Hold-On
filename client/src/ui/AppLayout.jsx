import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";

function AppLayout() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-1/2">
        <Breadcrumb />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
