import Button from "./Button";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="w-full bg-primary text-lg flex justify-between px-8 py-4">
      <Logo />
      <SearchBar />
      <Button />
    </div>
  );
}
