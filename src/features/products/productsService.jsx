import axios from "axios";

const API_URL = "http://localhost:4000";

const create = async (datos) => {
  const res = await axios.post(API_URL + "/products/create", datos);
  return res.data;
};

const getAll = async () => {
  const res = await axios.get(API_URL + "/products");
  return res.data;
};


const getById = async (id) => {
    const res = await axios.get(API_URL + "/products/" + id);
    return res.data;
};
  
const deleteProduct = async (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.delete(API_URL + "/products/" + id, {
      headers: {
        authorization: user?.token,
      },
    });
    return res.data;
};
  
const getProductByName = async (productName) => {
    const res = await axios.get(API_URL + "/products/name/" + productName);
    return res.data;
};
  
  
const productsService = {
    create,
    getAll,
    getById,
    deleteProduct,
    getProductByName
  };



export default productsService;