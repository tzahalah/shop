import { configureStore} from "@reduxjs/toolkit";
import UserSlice from "../Features/User/UserSlice";
import OrderSlice from "../Features/Order/OrderSlice" ;
import ProductSlice from "../Features/Product/ProductSlice";

export const store = configureStore({
    reducer:{
        user: UserSlice,
        product: ProductSlice,
        order: OrderSlice
    },
})