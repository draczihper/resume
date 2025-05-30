import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles/styles.css';
import Profile from "./components/Profile";import Education from "./components/Education";
// import Experience from "./components/Experience";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Profile />
    {/* <Education />
    <Experience /> */}
  </StrictMode>
);
