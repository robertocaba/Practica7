import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productsService";

const initialState = {
  products: [],
  isLoading: false,
  product: {},
};
export const create = createAsyncThunk("products/", async (datos)=>{
  try {
    return await productsService.create(datos);
  } catch (error) {
    console.error(error);
  }
});

export const getAll = createAsyncThunk("products/getAll", async () => {
  try {
    return await productsService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const like = createAsyncThunk("products/like", async (_id) => {
    try {
      return await productsService.like(_id);
    } catch (error) {
      console.error(error);
    }
  });
  export const getById = createAsyncThunk("products/getById", async (id) => {
    try {
      return await productsService.getById(id);
    } catch (error) {
      console.error(error);
    }
  });
  
  export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
    try {
      return await productsService.deleteProduct(id);
    } catch (error) {
      console.error(error);
    }
  });
  export const getProductByName = createAsyncThunk(
    "products/getProductByName",
    async (productName) => {
      try {
        return await productsService.getProductByName(productName);
      } catch (error) {
        console.error(error);
      }
    }
  );
  
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
        state.products = action.payload;
      })
    builder.addCase(getAll.pending, (state) => {
        state.isLoading = true;
      })
    builder.addCase(like.fulfilled, (state, action) => {
        const products = state.products.map((product) => {
          if (product._id === action.payload._id) {
            product = action.payload;
          }
          return product;
        });
        state.products = products;
      });
    builder.addCase(getById.fulfilled, (state, action) => {
        state.product = action.payload;
      });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
        console.log(action.payload);
        state.products = state.products.filter(
          (product) => product.id !== +action.payload.id
        );
      });
    builder.addCase(getProductByName.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});

export const { reset } = productsSlice.actions;
export default productsSlice.reducer;