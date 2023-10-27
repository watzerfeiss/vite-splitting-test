import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <div className="layout">
      <header style={{ display: "flex", gap: "8px" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/workspace"}>Publisher workspace</Link>
        <Link to={"/workspace/dashboard"}>Publisher dashboard</Link>
        <Link to={"/admin"}>Admin section</Link>
        <Link to={"/support"}>Support section</Link>
      </header>

      <main>
        <Suspense fallback={"Main layout: loading..."}>
          <Outlet />
        </Suspense>
      </main>

      <footer>© 42060 whatever</footer>
    </div>
  </>
);

export default Layout;
