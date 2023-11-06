export default function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="px-4 py-2 border-2 rounded-lg outline-none border-primary placeholder:text-black"
    />
  );
}
