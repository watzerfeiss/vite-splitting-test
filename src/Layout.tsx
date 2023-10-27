import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <div className="layout">
      <header>
        <Link to={"/"}>Home</Link>
        <Link to={"/workspace"}>Publisher workspace</Link>
        <Link to={"/workspace/dashboard"}>Publisher dashboard</Link>
        <Link to={"/admin"}>Admin section</Link>
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
