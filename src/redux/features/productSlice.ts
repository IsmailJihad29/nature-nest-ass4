import { TProduct } from '@/utils/interface'
import {createSlice, PayloadAction } from '@reduxjs/toolkit'



type TInitialState ={
    products: TProduct[]
}
const initialState : TInitialState= {
    products: []
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        addProduct:(state, action:PayloadAction<TProduct>)=>{
            state.products.push({... action.payload})
        },
        deleteProduct:(state, action: PayloadAction<string>)=>{
            state.products = state.products.filter(item => item._id !== action.payload)
         },
    }

})

export const {addProduct, deleteProduct} = productSlice.actions 

export default productSlice.reducer