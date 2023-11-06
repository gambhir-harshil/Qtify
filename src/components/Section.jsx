import { useState } from "react";
import Carousel from "./Carousel";
import Cards from "./Cards";

export default function Section({ request }) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div className="relative z-0 flex flex-col gap-4 px-8">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold text-white">{request.name}</h1>
        <button
          className="text-lg font-semibold text-primary"
          onClick={handleToggle}
        >
          {toggle ? "Collapse" : "Show all"}
        </button>
      </div>
      {toggle ? (
        <Cards url={request.endpoint} />
      ) : (
        <Carousel url={request.endpoint} />
      )}
    </div>
  );
}
