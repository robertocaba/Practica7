import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAll, reset } from "../../../features/products/productsSlice";

const Product = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getAll());
    await dispatch(reset());
  }, []);

  if (isLoading) {
    return <h1>Cargando products...</h1>;
  }

  const listProduct = products.map((product) => {
    return (
      <ul className="product" key={product.id}>
          <li>{product.name}</li>
          <button onClick={() => dispatch(deleteProduct(product.id))}>X</button>
      </ul>
    );
  });
  return <div>{listProduct}</div>;
};

export default Product;