import { Close } from "@mui/icons-material";
import Input from "./Input";

export default function Feedback({ onToggle }) {
  return (
    <div className="absolute flex items-start justify-center w-screen h-screen bg-secondary/80 z-[99] py-12">
      <form
        onSubmit={onToggle}
        className="bg-white w-[30%] rounded-2xl flex flex-col items-center p-8 gap-8 relative"
      >
        <span className="text-xl font-semibold text-secondary">Feedback</span>
        <Input type={"text"} placeholder={"Full name"} />
        <Input type={"email"} placeholder={"Email ID"} />
        <Input type={"text"} placeholder={"Subject"} />
        <textarea
          className="h-24 px-4 py-2 border-2 rounded-lg outline-none border-primary placeholder:text-black"
          placeholder="Description"
        />
        <button
          type="submit"
          className="px-4 py-2 text-lg font-semibold text-white rounded-lg bg-primary"
        >
          Submit feedback
        </button>
        <button className="absolute top-8 right-8" onClick={onToggle}>
          <Close />
        </button>
      </form>
    </div>
  );
}
