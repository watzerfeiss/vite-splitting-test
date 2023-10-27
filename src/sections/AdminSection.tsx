import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LargeComponent from "../components/LargeComponent";
import { largeObject } from "../utils/large-module";

const AdminSection = () => (
  <div className="admin-section">
    <nav className="sidebar">Admin sidebar</nav>
    <div className="main">
      <h1>Admin section</h1>
      <LargeComponent date={new Date().toISOString()} />
      <p>Large object: {largeObject.lorem}</p>
      <Suspense fallback={"Publisher section: loading..."}>
        <Outlet />
      </Suspense>
    </div>
  </div>
);

export default AdminSection;
