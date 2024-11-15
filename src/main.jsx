import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import AuthContextFun from "./components/Provider/AuthContextFun.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <AuthContextFun>
  <RouterProvider router={router}></RouterProvider>
  </AuthContextFun>
  </StrictMode>
);
