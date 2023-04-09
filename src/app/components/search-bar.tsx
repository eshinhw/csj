export default function SearchBar() {
  return (
    <div className="flex flex-row gap-3">
      <input type="text" className="border-2 border-solid"/>
      <button className="border-2">Go</button>
    </div>
  );
}
