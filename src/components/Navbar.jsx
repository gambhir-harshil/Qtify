import { useState } from "react";
import FeedbackButton from "./FeedbackButton";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Feedback from "./Feedback";

export default function Navbar() {
  const [showFeedback, setShowFeedback] = useState(false);

  function handleToggle(e) {
    e.preventDefault();
    setShowFeedback(!showFeedback);
  }

  return (
    <>
      <div className="flex justify-between w-full px-8 py-5 text-lg bg-primary">
        <Logo />
        <SearchBar />
        <FeedbackButton onToggle={handleToggle}>
          {!showFeedback ? "Give Feedback" : "Close Form"}
        </FeedbackButton>
      </div>
      {showFeedback && <Feedback onToggle={handleToggle} />}
    </>
  );
}
