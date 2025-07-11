import Snippet from "./Snippet";

export default function SnippetsList({ snippets, setSnippets }) {
  return (
    <div>
      <h2>Snippets List</h2>
      <ul className="snippetsList">
        {snippets.map((item, index) => (
          <li className="snippetsList_element" key={index}>
            <Snippet
              id={index}
              snippet={item.title}
              setSnippets={setSnippets}
              snippets={snippets}
              language={item.language}
              code={item.code}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
