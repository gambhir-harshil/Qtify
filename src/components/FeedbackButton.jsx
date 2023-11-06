export default function FeedbackButton({ children, onToggle }) {
  return (
    <button
      className="px-4 py-2 font-semibold bg-black rounded-lg text-primary"
      onClick={onToggle}
    >
      {children}
    </button>
  );
}
