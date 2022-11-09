import { useParams } from "react-router-dom";
import React from "react";
import Header from "components/Header";

function Product() {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <h1>Produto</h1>
      <h1>{id}</h1>
    </div>
  );
}

export default Product;
