import React from "react";

const Produto = ({ nome, preco }) => {
  return (
    <div>
      <h2>{nome}</h2>
      <h3> R$ {preco}</h3>
    </div>
  );
};

export default Produto;
