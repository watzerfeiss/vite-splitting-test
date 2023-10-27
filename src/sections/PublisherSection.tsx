import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const PublisherSection = () => (
  <div className="publisher-section">
    <nav className="sidebar">Publisher sidebar</nav>
    <div className="main">
      <h1>Publisher section</h1>
      {/* <Expensive date={new Date().toISOString()} /> */}
      <Suspense fallback={"Publisher section: loading..."}>
        <Outlet />
      </Suspense>
    </div>
  </div>
);

export default PublisherSection;
