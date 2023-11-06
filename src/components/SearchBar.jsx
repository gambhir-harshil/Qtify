import { Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import requests from "../consts/requests";
import Menu from "./Menu";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [filteredAlbums, setFilteredAlbums] = useState(null);

  const [albumData, setAlbumData] = useState([]);

  const { response: topAlbumData } = useAxios(requests.topAlbums.endpoint);
  const { response: newAlbumData } = useAxios(requests.newAlbums.endpoint);

  useEffect(() => {
    if (topAlbumData && newAlbumData) {
      setAlbumData(topAlbumData?.concat(newAlbumData));
    }
  }, [topAlbumData, newAlbumData]);

  useEffect(() => {
    function filterData(albumData) {
      if (input) {
        const filteredAlbums = albumData?.filter((album) =>
          album?.title?.toLowerCase()?.includes(input.toLowerCase())
        );
        setFilteredAlbums(filteredAlbums.slice(0, 5));
      }
    }
    filterData(albumData);
  }, [input, albumData]);

  useEffect(() => {
    function closeMenu() {
      if (!input) {
        setFilteredAlbums(null);
      }
    }
    closeMenu();
  }, [input]);

  return (
    <div className="relative flex items-center justify-center w-1/2">
      <form className="relative w-1/2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search an album of your choice"
          className="w-full px-4 py-1 border rounded-lg outline-none border-secondary drop-shadow-md placeholder:text-secondary placeholder:text-sm"
        />
        <button
          type="submit"
          className="absolute px-2 bg-white border-l border-black bottom-1 right-2"
        >
          <Search />
        </button>
      </form>
      {filteredAlbums !== null && <Menu albums={filteredAlbums} />}
    </div>
  );
}
