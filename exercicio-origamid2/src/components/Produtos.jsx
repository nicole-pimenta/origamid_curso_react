import React from "react";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <div>
      Produtos
      <div>
        {produtos.map(({ nome, propriedades }) => {
          return (
            <div>
              <p> {nome}</p>
              <ul>
                <li> {propriedades[0]}</li>
                <li> {propriedades[1]}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Produtos;
