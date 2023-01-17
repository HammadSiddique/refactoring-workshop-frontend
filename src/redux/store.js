import { configureStore } from "@reduxjs/toolkit"
import { authRedux } from "./auth/auth"
import { cartRedux } from "./cart/cart"


const store = configureStore({
  reducer: {
    auth: authRedux.reducer,
    cart: cartRedux.reducer,
  },
})

export default store
