import HomeBanner from "../components/HomeBanner";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen bg-secondary">
      <Navbar />
      <HomeBanner />
    </div>
  );
}
