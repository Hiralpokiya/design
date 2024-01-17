import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "../Home/Home";


const ROUTES = [
  {
    path: "/",
    component: <Home />,
    isPrivate: false,
  },


];

const Routing = () => {
  return (
    <>
      <Routes>
        {ROUTES.map((item, ind) => (
          <Route key={ind} path={item.path} element={item.component} />
        ))}
      </Routes>
    </>
  );
};

export default Routing;
