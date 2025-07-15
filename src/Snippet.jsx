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

  function handleEditing() {
    if (isEditing) {
      setEditedTitle(snippet);
      setEditedLanguage(language || "");
      setEditedCode(code || "");
    }
    setIsEditing(!isEditing);
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
      {isEditing ? (
        <div className="form_div-container">
          <label className="Form_label">Snippets title :</label>
          <input
            className="Form_input"
            type="text"
            placeholder="title"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            required
          />
          <label className="Form_label">Snippets language :</label>
          <input
            className="Form_input"
            type="text"
            placeholder="language"
            value={editedLanguage}
            onChange={(e) => setEditedLanguage(e.target.value)}
            required
          />
          <label className="Form_label">Snippets code :</label>
          <textarea
            className="Form_input code_input"
            type="text"
            placeholder="code"
            value={editedCode}
            onChange={(e) => setEditedCode(e.target.value)}
            required
          />
          <div className="modif_button-container">
            <button className="button_list" onClick={handleSave}>
              Save
            </button>
            <button className="button_list" onClick={handleEditing}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="snippet_container">
            {snippet}

            {language && <span> Language : {language}</span>}
            <div className="code_container">
              <code>{code}</code>
            </div>
          </div>
          <div className="button_container">
            <button className="button_list" onClick={handleEditing}>
              Modifie
            </button>
            <button className="button_list" onClick={() => deleteSnippet(id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </>
  );
}
