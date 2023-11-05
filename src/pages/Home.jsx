import HomeBanner from "../components/HomeBanner";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

import requests from "../consts/requests";
import Carousel from "../components/Carousel";
import { useState } from "react";
import Section from "../components/Section";

export default function Home() {
  const [expand, setExpand] = useState({
    topAlbums: false,
    newAlbums: false,
  });

  function handleExpand(name) {
    setExpand((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }
  return (
    <div className="h-full min-h-screen px-8 bg-secondary">
      <Navbar />
      <HomeBanner />
      <div className="flex flex-col gap-12">
        <Section request={requests.newAlbums} />
        <Section request={requests.topAlbums} />
      </div>
    </div>
  );
}
