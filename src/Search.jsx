import { useEffect } from "react";

export default function Search({ search, setSearch }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(search);
      console.log(`searching for : ${search}`);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="search_container">
      <label className="Form_label">Snippets Search :</label>
      <br />
      <input
        className="Form_input"
        type="text"
        placeholder="Search :"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search !== "" && <button onClick={clearSearch}>X</button>}
    </div>
  );
}
