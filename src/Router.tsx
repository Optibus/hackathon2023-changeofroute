import React from "react";
import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import CancelledRouteCube from "./components/CancelledRouteCube";
import MapExample from "./MapExample";
import CancelledStop from "./components/CancelledStop";
import StopAlternative from "./StopAlternative";

const Root: React.FC = () => (
  <>
    <Link to="/">Home</Link> <Link to="edit">Edit</Link>{" "}
    <Link to="preview">Preview</Link> <Outlet />
  </>
);
const myData = {
  alternatives: [
    {
      walkingDistance: {
        minutes: 8,
        meters: 400,
      },
      stop: {
        name: "120 Victoria st. London 192809",
        id: "# 8943890",
      },
      color: "#E8A7FF",
    },
  ],
};

const myAlternative = myData.alternatives[0];

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
      {
        path: "/stop-alternative",
        element: (
          <StopAlternative
            stop={myAlternative.stop}
            walkingDistance={myAlternative.walkingDistance}
            color={myAlternative.color}
          />
        ),
      },
    ],
  },
]);

export default router;
