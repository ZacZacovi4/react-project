import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function Form({ snippets, setSnippets }) {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const snippetsUndated = [...snippets, { title, language, code }];
    setSnippets(snippetsUndated);
    setTitle("");
    setLanguage("");
    setCode("");
    localStorage.setItem("snippets", JSON.stringify(snippetsUndated));
  }

  return (
    <div className="Form_container">
      <h2>Snippets Formulaire</h2>
      <form className="Form_snippets" onSubmit={handleSubmit}>
        <label className="Form_label">Snippets title :</label>
        <input
          className="Form_input"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="Form_label">Snippets language :</label>
        <input
          className="Form_input"
          type="text"
          placeholder="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <label className="Form_label">Snippets code :</label>
        <textarea
          className="Form_input"
          type="text"
          placeholder="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button>
          <BsFillPlusCircleFill />
          &nbsp;Add snippets
        </button>
      </form>
    </div>
  );
}
