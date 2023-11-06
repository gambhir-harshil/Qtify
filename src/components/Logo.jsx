import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <img src="./logo.png" alt="logo" className="h-[2.5rem]" />
    </Link>
  );
}
