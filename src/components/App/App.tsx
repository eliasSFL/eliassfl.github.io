import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Root } from "../Root/Root";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/portfolio" element={<Root />}></Route>
    </>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
