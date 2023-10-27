import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LargeComponent from "../components/LargeComponent";

const SupportSection = () => (
  <div className="support-section">
    <nav className="sidebar">Support sidebar</nav>
    <div className="main">
      <h1>Support section</h1>
      <LargeComponent date={new Date().toISOString()} />
      <Suspense fallback={"Publisher section: loading..."}>
        <Outlet />
      </Suspense>
    </div>
  </div>
);

export default SupportSection;
