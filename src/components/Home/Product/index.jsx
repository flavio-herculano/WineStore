import { useParams } from "react-router-dom";
import React from "react";
import Header from "components/Header";
import { useState, useEffect } from "react";
import axios from "axios";


function Product() {
  const { id } = useParams();
  const [prods, setProds] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/products/${id}`)
    .then(res =>{
      console.log(res)
      setProds(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  })

  return (
    
    <div>
      <Header></Header>
    
      <h1>Produto: {prods.desc}</h1>
      <h1>Preço: {prods.price}</h1>
      <h1>tipo: {prods.tipo}</h1>
    </div>
  );
}

export default Product;
