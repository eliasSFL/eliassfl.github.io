import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Root } from "../Root/Root";
import { Contact } from "../Pages/Contact/Contact";
import { About } from "../Pages/About/About";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/portfolio" element={<Root />}>
        <Route index element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
