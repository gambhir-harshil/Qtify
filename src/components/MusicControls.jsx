import { useEffect, useState } from "react";
import requests from "../consts/requests";
import useAxios from "../hooks/useAxios";
import { Pause, SkipNext, SkipPrevious } from "@mui/icons-material";

export default function MusicControls() {
  const { response } = useAxios(requests.songs);
  const [randomSong, setRandomSong] = useState({});

  useEffect(() => {
    if (response) {
      const randomIndex = Math.floor(Math.random() * response.length);
      setRandomSong(response[randomIndex]);
    }
  }, [response]);

  return (
    <div className="fixed bottom-0 z-50 flex justify-between w-full px-8 py-4 shadow-white bg-secondary">
      <div className="absolute flex items-center gap-4 bottom-4">
        <div className="w-20 h-20 overflow-hidden bg-cover rounded-xl">
          <img src={randomSong.image} alt={randomSong.title} />
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-white">{randomSong.title}</span>
          {randomSong.artists?.slice(0, 2).map((artist, idx) => (
            <span className="text-xs font-semibold text-gray-400" key={idx}>
              {artist}
              {idx < randomSong.artists?.length - 1 && ", "}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-4">
        <div className="flex items-center justify-center gap-8">
          <button className="text-white">
            <SkipPrevious fontSize="large" />
          </button>
          <button className="w-12 h-12 bg-white rounded-full">
            <Pause fontSize="large" />
          </button>
          <button className="text-white">
            <SkipNext fontSize="large" />
          </button>
        </div>

        <div className="flex w-[60%] justify-center items-center gap-4">
          <span className="text-sm font-semibold text-white">0:38</span>
          <div className="h-1.5 w-[75%] bg-white rounded-lg relative">
            <div className="absolute bg-primary w-[30%] h-1.5 left-0 rounded-lg"></div>
          </div>

          <span className="text-sm font-semibold text-white">3:38</span>
        </div>
      </div>
    </div>
  );
}
