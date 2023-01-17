import React from "react";
import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import CancelledRouteCube from "./components/CancelledRouteCube";
import CancelledStop from "./components/CancelledStop";
import MapExample from "./MapExample";

const Root: React.FC = () => (
  <>
    <Link to="/">Home</Link> <Link to="edit">Edit</Link>{" "}
    <Link to="preview">Preview</Link> <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <div>Home page.</div>,
      },
      {
        path: "/edit",
        element: <div>blah</div>,
      },
      {
        path: "/cube",
        element: <CancelledRouteCube text="56" color="red" />,
      },
      {
        path: "/preview",
        element: <div>blah</div>,
      },
      {
        path: "/maptest",
        element: <MapExample />,
      },
      {
        path: "/cancelled-stop",
        element: <CancelledStop />,
      },
    ],
  },
]);

export default router;
