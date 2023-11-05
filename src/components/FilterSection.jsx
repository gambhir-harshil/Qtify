import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Carousel from "./Carousel";

const genres = ["All", "Rock", "Pop", "Jazz", "Blues"];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FilterSection() {
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
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
      <Carousel url={"/songs"} />
    </div>
  );
}
