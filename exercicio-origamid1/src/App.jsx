import { useState } from "react";

function App() {
  const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
    ],
    ativa: true,
  };

  const mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
      { nome: "Guitarra", preco: "R$ 3500" },
    ],
    ativa: false,
  };

  const dados = mario;

  const totalCompras = dados.compras.reduce((acc, act) => {
    let value = act.preco.split(" ");
    return acc + Number(value[1]);
  }, 0);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        {" "}
        Situação:
        {dados.ativa ? (
          <span style={{ color: "green" }}>Ativa</span>
        ) : (
          <span style={{ color: "red" }}>Inativo</span>
        )}
      </p>
      <p>Total gasto : R$ {totalCompras}</p>

      {totalCompras > 10000 && <p>você está gastando muito</p>}
    </div>
  );
}

export default App;
