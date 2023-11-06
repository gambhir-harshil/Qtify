import { useLocation } from "react-router-dom";
import AlbumBanner from "../components/AlbumBanner";

export default function Album() {
  const location = useLocation();
  const { album } = location.state;
  return (
    <div className="h-full min-h-screen">
      <AlbumBanner album={album} />
    </div>
  );
}
