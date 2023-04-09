export default function SearchBar() {
  return (
    <div className="flex flex-row gap-3">
      <input type="text" className="border-2 border-solid rounded-xl"/>
      <button className="border-2 rounded-xl px-2">Go</button>
    </div>
  );
}
