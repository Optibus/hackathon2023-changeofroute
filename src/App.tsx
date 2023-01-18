import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import "./styles.css";
const App: React.FC = () => <RouterProvider router={router} />;

export default App;
