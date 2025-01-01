import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Root } from "../Root/Root";
import { Contact } from "../Pages/Contact/Contact";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/portfolio" element={<Root />}>
        <Route path="contact" element={<Contact />} />
      </Route>
    </>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
