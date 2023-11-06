import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import MusicControls from "./MusicControls";

export default function Layout() {
  return (
    <div className="bg-secondary">
      <Navbar />
      <Outlet />
      <MusicControls />
    </div>
  );
}
