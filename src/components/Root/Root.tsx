import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Footer } from "./Footer/Footer";

export const Root: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
