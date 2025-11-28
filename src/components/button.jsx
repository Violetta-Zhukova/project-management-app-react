export default function Button({ text, onClick }) {
  return (
    <button
      className="px-4 py-2 min-w-min max-w-max h-auto bg-gray-600 hover:bg-gray-300 text-gray-300 hover:text-gray-600 text-center text-xs md:text-base font-sans rounded-md"
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
}
