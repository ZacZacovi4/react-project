import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import SnippetsList from "./SnippetsList";
import Search from "./Search";

function App() {
  const [snippets, setSnippets] = useState([]);
  const [search, setSearch] = useState("");

  const filteredSnippets = snippets.filter(
    (snippet) =>
      snippet.title.toLowerCase().includes(search.toLowerCase()) ||
      snippet.language.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const storedSnippets = localStorage.getItem("snippets");
    if (storedSnippets) {
      setSnippets(JSON.parse(storedSnippets));
    }
  }, []);

  return (
    <>
      <h1 className="project_title">Snippets</h1>
      <div>
        <Search search={search} setSearch={setSearch} />
        <Form setSnippets={setSnippets} snippets={snippets} />
        <SnippetsList snippets={filteredSnippets} setSnippets={setSnippets} />
      </div>
    </>
  );
}

export default App;
