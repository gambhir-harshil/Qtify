import { Search } from "@mui/icons-material";

export default function Navbar() {
  return (
    <div className="w-full bg-primary text-lg flex justify-between px-8 py-4">
      <img src="./logo.png" alt="logo" className="h-[2.5rem]" />
      <div className="relative w-1/3 flex items-center">
        <input
          type="text"
          placeholder="Search an album of your choice"
          className="w-full border-secondary border drop-shadow-md px-4 rounded-lg placeholder:text-secondary placeholder:text-sm py-1 outline-none"
        />
        <span className="absolute right-2 px-2 border-l border-black bg-white">
          <Search />
        </span>
      </div>
      <button className="bg-black rounded-lg text-primary font-semibold px-4 py-2">
        Give Feedback
      </button>
    </div>
  );
}
