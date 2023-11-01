import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LargeComponent from "../components/LargeComponent";

import { largeObject as largeObjectCommon } from "../utils/large-module-common";
import { largeObject as largeObjectCommon2 } from "../utils/large-module-common-2";

const SupportSection = () => (
  <div className="support-section">
    <nav className="sidebar">Support sidebar</nav>
    <div className="main">
      <h1>Support section</h1>
      <LargeComponent date={new Date().toISOString()} />
      <p>
        Common large object length:{" "}
        {largeObjectCommon.lorem.length + largeObjectCommon2.lorem.length}
      </p>
      <Suspense fallback={"Publisher section: loading..."}>
        <Outlet />
      </Suspense>
    </div>
  </div>
);

export default SupportSection;
