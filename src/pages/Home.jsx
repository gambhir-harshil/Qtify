import HomeBanner from "../components/HomeBanner";
import requests from "../consts/requests";
import Section from "../components/Section";
import FilterSection from "../components/FilterSection";
import Faqs from "../components/Faqs";

export default function Home() {
  return (
    <div className="h-full min-h-screen pb-48">
      <HomeBanner />
      <div className="flex flex-col w-full gap-12 px-8">
        <Section request={requests.newAlbums} />
        <Section request={requests.topAlbums} />
        <hr className="border-t-2 border-primary" />
        <FilterSection />
        <hr className="border-t-2 border-primary" />
        <Faqs />
      </div>
    </div>
  );
}
