import { useEffect, useState } from "react";
import "./App.css";
import Produto from "./components/Produto";

function App() {
  const [preference, setPreference] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const item = localStorage.getItem("produto");
    setPreference(item);

    if (preference) {
      async function render() {
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${preference}`
        );
        const data = await response.json();
        setData([data]);
      }
      render();
    }
  }, [preference]);
  function handleClick(evt) {
    localStorage.clear();
    localStorage.setItem("produto", `${evt.target.innerText}`);
    setPreference(`${evt.target.innerText}`);
  }

  return (
    <div className="App">
      <h1>Preferência : {preference}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      {data.map(({ id, nome, preco }) => {
        return (
          <section key={id}>
            <Produto nome={nome} preco={preco} />
          </section>
        );
      })}
    </div>
  );
}

export default App;
