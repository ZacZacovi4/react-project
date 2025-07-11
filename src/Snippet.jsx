import { useState } from "react";

export default function Snippet({
  snippet,
  snippets,
  id,
  setSnippets,
  language,
  code,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(snippet);
  const [editedLanguage, setEditedLanguage] = useState(language || "");
  const [editedCode, setEditedCode] = useState(code || "");

  function deleteSnippet(id) {
    const updatedSnippets = snippets.filter((item, i) => i !== id);
    setSnippets(updatedSnippets);
    localStorage.setItem("snippets", JSON.stringify(updatedSnippets));
  }

  function handleEdited() {
    if (isEdited) {
      setEditedTitle(snippet);
      setEditedLanguage(language || "");
      setEditedCode(code || "");
    }
    setIsEdited(!isEdited);
  }

  function handleSave() {
    const updatedSnippets = snippets.map((item, i) => {
      if (i === id) {
        return {
          title: editedTitle.trim(),
          language: editedLanguage.trim(),
          code: editedCode.trim(),
        };
      }
      return item;
    });

    setSnippets(updatedSnippets);
    localStorage.setItem("snippets", JSON.stringify(updatedSnippets));
    setIsEditing(false);
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
