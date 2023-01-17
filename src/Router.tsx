import React from "react";
import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import MapContainer from "./MapContainer";
import CancalledRouteCube from "./CancalledRouteCube";
import CancelledStop from "./CancelledStop";

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
        element: <MapContainer />,
      },
      {
        path: "/cube",
        element: <CancalledRouteCube text='56' color='red' />,
      },
      {
        path: "/preview",
        element: <MapContainer />,
      },
      {
        path: "/cancelled-stop",
        element: <CancelledStop />,
      },
    ],
  },
]);

export default router;
