import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-tooltip/dist/react-tooltip.css";

import { HashRouter, Routes, Route } from "react-router-dom";
import { Root } from "../Root/Root";
import { Contact } from "../Pages/Contact/Contact";
import { About } from "../Pages/About/About";
import { ErrorElement } from "../ErrorHandling/ErrorBoundary";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/portfolio" element={<Root />}>
          <Route index element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorElement />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
