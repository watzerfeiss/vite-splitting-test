import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Expensive from "../components/ExpensiveComponent";

const AdminSection = () => (
  <div className="admin-section">
    <nav className="sidebar">Admin sidebar</nav>
    <div className="main">
      <h1>Admin section</h1>
      <Expensive date={new Date().toISOString()} />
      <Suspense fallback={"Publisher section: loading..."}>
        <Outlet />
      </Suspense>
    </div>
  </div>
);

export default AdminSection;
