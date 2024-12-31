import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Root } from "../Root/Root";

const appRouter = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />}></Route>)
);

const App: React.FC = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
