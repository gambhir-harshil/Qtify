import HomeBanner from "../components/HomeBanner";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="h-screen bg-secondary">
      <Navbar />
      <HomeBanner />
      <Card />
    </div>
  );
}
