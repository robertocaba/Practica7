import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../../../features/products/productsSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getById(id));
  }, []);

  return (
    <div>
      <h1>ProductDetail</h1>
      <p>{product.title}</p>
      <p>{product.body}</p>
    </div>
  );
};

export default ProductDetail;