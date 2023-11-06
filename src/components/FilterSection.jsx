import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import useAxios from "../hooks/useAxios";
import requests from "../consts/requests";

const genres = ["All", "Rock", "Pop", "Jazz", "Blues"];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FilterSection() {
  const [value, setValue] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [songs, setSongs] = useState([]);

  const { response } = useAxios(requests.songs);

  useEffect(() => {
    if (response) {
      if (selectedGenre === "All") {
        setSongs(response);
      } else {
        const filteredSongs = response.filter((song) => {
          return song.genre.label === selectedGenre;
        });
        setSongs(filteredSongs);
      }
    }
  }, [response, selectedGenre]);

  function handleChange(event, newValue) {
    setValue(newValue);
    setSelectedGenre(genres[newValue]);
    console.log(selectedGenre, songs[0]?.genre.label, "./.........");
  }

  return (
    <div className="flex flex-col gap-4 px-8">
      <h1 className="text-lg font-semibold text-white">Songs</h1>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: { backgroundColor: "#34C94B", height: "4px" },
        }}
        sx={{
          "& button": { color: "white", fontSize: "16px", fontWeight: "600" },
          "& button.Mui-selected": { color: "white" },
        }}
      >
        {genres.map((genre, id) => (
          <Tab
            label={genre}
            key={genre}
            sx={{ color: "white" }}
            {...a11yProps(id)}
          />
        ))}
      </Tabs>
      <Carousel songs={songs} />
    </div>
  );
}
