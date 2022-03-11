import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Product.scss";
import { getAll, reset } from "../../../../features/products/productsSlice";
import { Spin } from "antd";
import { Link } from "react-router-dom";

const Product = () => {
  const { products, isLoading} = useSelector((state)=>state.products);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getAll());
    await dispatch(reset());
  }, []);
  if (isLoading) {
    return (
      <h1>
        <Spin />
      </h1>
    );
  }
  const listProduct = products.map((product) => {
    return (
      <div className="product" key={product.id}>
        <Link to={"/product/" + product.id}>
          <p>{product.name}</p>
        </Link>
      </div>
    );
  });
  return <div>{listProduct}</div>;
};
 


export default Product