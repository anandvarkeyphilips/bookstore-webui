import { Outlet } from "react-router-dom";
import Navbar from "./partials/Navbar";
import React from "react";

export default function Layout() {
    return (
      <React.Fragment>
        <Navbar/>
        <Outlet/>
      </React.Fragment>
    );
  }