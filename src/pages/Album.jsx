import { useLocation } from "react-router-dom";
import AlbumBanner from "../components/AlbumBanner";
import SongsTable from "../components/SongsTable";

export default function Album() {
  const location = useLocation();
  const { album } = location.state;
  return (
    <div className="h-full min-h-screen px-16 pb-48">
      <AlbumBanner album={album} />
      <SongsTable songs={album.songs} />
    </div>
  );
}
