export default function Card() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col bg-cover h-auto max-w-[14rem] overflow-hidden rounded-xl relative">
        <img
          src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
          alt="image"
        />
        <div className="absolute w-full bg-white bottom-0 z-20 px-4 py-2">
          <button className="bg-secondary rounded-full text-white px-2 py-1">
            100 followers
          </button>
        </div>
      </div>
      <span className="text-white">New Bollywood</span>
    </div>
  );
}
