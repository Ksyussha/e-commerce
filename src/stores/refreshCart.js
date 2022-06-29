import { defineStore } from 'pinia'
import axios from "axios"

export const useCartStore = defineStore("cart",{
    id: "cart",
    state: () => ({
        cart: JSON.parse(sessionStorage.getItem('cart'))
    }),
    getters: {
        getCart(state) {
            return state.cart
        }
    },
    actions: {},
})