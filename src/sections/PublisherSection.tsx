import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { largeObject } from "../utils/large-module";

const PublisherSection = () => (
  <div className="publisher-section">
    <nav className="sidebar">Publisher sidebar</nav>
    <div className="main">
      <h1>Publisher section</h1>
      <p>Large object length: {largeObject.lorem.length}</p>

      <Suspense fallback={"Publisher section: loading..."}>
        <Outlet />
      </Suspense>
    </div>
  </div>
);

export default PublisherSection;
