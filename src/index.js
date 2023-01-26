import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutComponent from "./component/LayoutComponent";
import Greeting from "./pages/Greeting";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ContextProvider> */}
      <Routes>
        <Route
          exact
          path="/"
          element={<LayoutComponent content={<Home />} />}
        />
        <Route
          exact
          path="/greeting"
          element={<LayoutComponent content={<Greeting />} />}
        />
        <Route
          exact
          path="/admin"
          element={<LayoutComponent content={<App />} />}
        />
        {/* <Route exact path="/calon" element={<Form />} />
          <Route exact path="/end" element={<End />} />
        <Route exact path="/result" element={<Result />} /> */}
      </Routes>
      {/* </ContextProvider> */}
    </BrowserRouter>{" "}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
