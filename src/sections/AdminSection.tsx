import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LargeComponent from "../components/LargeComponent";
import { largeObject } from "../utils/large-module";

import { largeObject as largeObjectCommon } from "../utils/large-module-common";
import { largeObject as largeObjectCommon2 } from "../utils/large-module-common-2";

const AdminSection = () => (
  <div className="admin-section">
    <nav className="sidebar">Admin sidebar</nav>
    <div className="main">
      <h1>Admin section</h1>
      <LargeComponent date={new Date().toISOString()} />
      <p>Large object: {largeObject.lorem}</p>
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

export default AdminSection;
