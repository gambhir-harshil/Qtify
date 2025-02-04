import { Link } from "react-router-dom";

export default function MenuItem({ album, onClose }) {
  console.log(album);
  return (
    <Link to={`/album/${album?.slug}`} state={{ album }} onClick={onClose}>
      <div className="flex items-center justify-between">
        <div className="w-16 h-20 overflow-hidden bg-cover rounded-xl">
          <img src={album.image} alt={album.title} />
        </div>
        <span className="text-base font-semibold text-white">
          {album.title}
        </span>
        <span className="text-sm font-semibold text-white">
          {album.follows} follows
        </span>
      </div>
      <hr className="border-t border-primary" />
    </Link>
  );
}
