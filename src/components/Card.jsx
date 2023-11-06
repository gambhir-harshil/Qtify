import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export default function Card({ album }) {
  return (
    <>
      {album.songs ? (
        <Tooltip title={`${album.songs.length} songs`} placement="top" arrow>
          <Link to={`/album/${album?.slug}`} state={{ album }}>
            <div className="flex flex-col gap-2 max-w-[10rem]">
              <div className="relative flex flex-col h-auto overflow-hidden bg-cover rounded-xl">
                <img src={album.image} alt={album.title} />
                <div className="absolute w-full bg-white/25 bottom-0 z-20 px-1.5 py-2">
                  <button className="px-2 py-1 text-sm text-white rounded-full bg-secondary">
                    {album.follows
                      ? `${album.follows} follows`
                      : `${album.likes} likes`}
                  </button>
                </div>
              </div>
              <span className="text-white">{album.title}</span>
            </div>
          </Link>
        </Tooltip>
      ) : (
        <div className="flex flex-col gap-2 max-w-[10rem]">
          <div className="relative flex flex-col h-auto overflow-hidden bg-cover rounded-xl">
            <img src={album.image} alt={album.title} />
            <div className="absolute w-full bg-white/25 bottom-0 z-20 px-1.5 py-2">
              <button className="px-2 py-1 text-sm text-white rounded-full bg-secondary">
                {album.follows
                  ? `${album.follows} follows`
                  : `${album.likes} likes`}
              </button>
            </div>
          </div>
          <span className="text-white">{album.title}</span>
        </div>
      )}
    </>
  );
}
