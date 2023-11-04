import { Search } from "@mui/icons-material";

export default function SearchBar() {
  return (
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
  );
}
