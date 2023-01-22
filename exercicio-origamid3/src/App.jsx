import { useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  const style = {
    backgroundColor: "blue",
    color: "white",
    margin: "10px",
  };

  async function handleFetch(event) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );

    const data = await response.json();

    setLoading(false);

    setData([data]);
  }

  return (
    <div className="App">
      <button onClick={handleFetch} style={style}>
        tablet
      </button>
      <button onClick={handleFetch} style={style}>
        smartphone
      </button>
      <button onClick={handleFetch} style={style}>
        notebook
      </button>

      {loading && "Carregando..."}

      {data &&
        data.map(({ id, nome, preco, descricao, fotos }) => {
          return (
            <ul key={id}>
              <li>{nome}</li>
              <li>{preco}</li>
              <li>{descricao}</li>
              <img src={fotos[0].src}></img>
            </ul>
          );
        })}
    </div>
  );
}

export default App;
