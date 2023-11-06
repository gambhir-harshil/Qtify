import Button from "./Button";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="flex justify-between w-full px-8 py-5 text-lg bg-primary">
      <Logo />
      <SearchBar />
      <Button />
    </div>
  );
}
