import React from "react";
import Nav from "../components/Nav";
import { RouteLink } from "../components/RouteLink";
import "./styles.css";

export default function HomePage() {
  return (
    <div className="app-container">
      <Nav />
      <RouteLink />
    </div>
  );
}
