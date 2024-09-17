import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { fetchAllProducts, newProduct, fetchProductByID, deleteProd ,putProd} from "../../App/ProjectAPI";

const initialState = {
    arrProduct: [{ "id": 1, "name": "חלב", "description": "חלב מפוסטר 3%", "imgUrl": "", "content": "100 גרם", "price": 5.2, "isCooling": true, "company": "טרה", "prodDate": "10-10-2022" }],
    currentProd: {},
    statusAdd: ""
}

export const fetchProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async (thankAPI) => {
        const res = await fetchAllProducts()
        return res
    },
)

export const addNewProduct = createAsyncThunk(
    'products/addNewProducts',
    async (prod, thankAPI) => {
        const res = await newProduct(prod)
        return res
    },
)
export const getProdById = createAsyncThunk(
    'products/getProdById',
    async (id, thankAPI) => {
        const res = await fetchProductByID(id)
        return res
    },
)

export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (id, thankAPI) => {
        const res = await deleteProd(id)
        return res
    }
)

export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async ({id, prod}, thankAPI) => {
        const res = await putProd(id , prod)
        return res
    }
)

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        chStatus: (state, action)=>{
            state.statusAdd=action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.arrProduct = payload
            })
            .addCase(addNewProduct.fulfilled, (state, { payload }) => {
                state.arrProduct.push(payload)
                state.statusAdd = "success"
            })
            .addCase(getProdById.fulfilled, (state, action) => {
                state.currentProd = action.payload
            })
            .addCase(deleteProduct.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.arrProduct=payload
            })
            .addCase(updateProduct.fulfilled, (state, { payload }) => {
                let index = state.arrProduct.findIndex(p => p.id === payload.id)
                state.arrProduct.splice(index, 1, payload)
                state.statusAdd="success"
            })

    }
})



export const {chStatus}= ProductSlice.actions;
export default ProductSlice.reducer