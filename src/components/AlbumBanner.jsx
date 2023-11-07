import { ArrowBack, PlaylistAdd, Shuffle } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function AlbumBanner({ album }) {
  return (
    <div className="relative h-[32rem] flex py-24 gap-12 items-center">
      <div className="overflow-hidden bg-cover rounded-lg w-72 h-80">
        <img src={album.image} alt={album.title} />
      </div>
      <div className="flex flex-col gap-6 text-white">
        <h1 className="text-4xl font-semibold">{album.title}</h1>
        <div className="flex flex-col gap-4">
          <p className="max-w-xl">{album.description}</p>
          <span className="font-semibold">
            {album.songs.length} songs{" "}
            <span className="mx-2 text-gray-400">• </span> {album.follows}{" "}
            follows
          </span>
          <div className="flex gap-6">
            <button className="px-4 py-2 text-lg font-semibold rounded-lg bg-primary">
              <Shuffle fontSize="large" /> Shuffle
            </button>
            <button className="px-4 py-2 text-lg font-semibold border-2 rounded-lg border-primary text-primary">
              <PlaylistAdd fontSize="large" /> Add to library
            </button>
          </div>
        </div>
      </div>
      <Link
        to={"/"}
        className="absolute flex items-center justify-center w-12 h-12 text-white rounded-full top-6 bg-primary"
      >
        <ArrowBack fontSize="large" />
      </Link>
    </div>
  );
}
