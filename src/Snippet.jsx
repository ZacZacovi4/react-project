import { useState } from "react";

export default function Snippet({
  snippet,
  snippets,
  id,
  setSnippets,
  language,
  code,
}) {
  function deleteSnippet(id) {
    const updatedSnippets = snippets.filter((item, i) => i !== id);
    setSnippets(updatedSnippets);
    localStorage.setItem("snippets", JSON.stringify(updatedSnippets));
  }

  return (
    <>
      <div className="snippet_container">
        {snippet}

        {language && <span> - Language : {language}</span>}

        {code}
      </div>
      <button className="button_list" onClick={() => deleteSnippet(id)}>
        Delete
      </button>
    </>
  );
}
