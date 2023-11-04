export default function Card({ album }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col bg-cover h-auto max-w-[10rem] overflow-hidden rounded-xl relative">
        <img src={album.image} alt={album.title} />
        <div className="absolute w-full bg-white bottom-0 z-20 px-1.5 py-2">
          <button className="bg-secondary rounded-full text-sm text-white px-2 py-1">
            {album.follows} follows
          </button>
        </div>
      </div>
      <span className="text-white">{album.title}</span>
    </div>
  );
}
