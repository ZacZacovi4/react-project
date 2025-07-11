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

  function handleTitle(e) {
    const title = e.target.value;
    setTitle(title);
  }

  function handleLanguage(e) {
    const language = e.target.value;
    setLanguage(language);
  }

  function handleCode(e) {
    const code = e.target.value;
    setCode(code);
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
          onChange={handleTitle}
        />
        <label className="Form_label">Snippets language :</label>
        <input
          className="Form_input"
          type="text"
          placeholder="language"
          value={language}
          onChange={handleLanguage}
        />
        <label className="Form_label">Snippets code :</label>
        <textarea
          className="Form_input"
          type="text"
          placeholder="code"
          value={code}
          onChange={handleCode}
        />
        <button>
          <BsFillPlusCircleFill />
          &nbsp;Add snippets
        </button>
      </form>
    </div>
  );
}
