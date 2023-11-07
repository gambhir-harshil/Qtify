import MenuItem from "./MenuItem";

export default function Menu({ albums, onClose }) {
  return (
    <div className="absolute w-[80%] top-16 border-2 border-t-0 border-primary bg-secondary p-4 z-50">
      {albums.length ? (
        <div className="flex flex-col gap-2">
          {albums.map((album) => (
            <MenuItem album={album} key={album.id} onClose={onClose} />
          ))}
        </div>
      ) : (
        <span className="font-semibold text-center text-primary">
          No albums found!
        </span>
      )}
    </div>
  );
}
