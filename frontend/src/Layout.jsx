import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  let user = "akashc";
  useEffect(() => {
    let a = localStorage.getItem("username");
    console.log(a);
  }, [user]);

  return (
    <div>
      {/* <nav
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav> */}
      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
