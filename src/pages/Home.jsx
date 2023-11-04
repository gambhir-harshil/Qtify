import HomeBanner from "../components/HomeBanner";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

import requests from "../consts/requests";

export default function Home() {
  return (
    <div className="h-full min-h-screen bg-secondary">
      <Navbar />
      <HomeBanner />
      <div className="flex flex-col gap-12">
        <Cards request={requests.topAlbums} />
        <Cards request={requests.newAlbums} />
      </div>
    </div>
  );
}
