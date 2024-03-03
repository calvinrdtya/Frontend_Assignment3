import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        product: [
        {
            name: "Indomie Goreng Rendang",
            desc: "Masakan instan terenak di dunia",
            stock: 10,
            price: 3900,
            image: "https://i.pinimg.com/474x/8b/d8/e1/8bd8e166515e001f19efa0fa72ddcb31.jpg",
            total: 0,
            qty: 0
        },
        {
            name: "Mie Gelas Rendang",
            desc: "Masakan instan khusus anak kos",
            stock: 10,
            price: 1500,
            image: "https://i.pinimg.com/474x/ab/fa/ef/abfaefcb5a8949a80289ac5d59edb3e9.jpg",
            total: 0,
            qty: 0
        },
        {
            name: "Bakmi mewah",
            desc: "Anak kost jangan nyoba-nyoba yah...",
            stock: 10,
            price: 10000,
            image: "https://i.pinimg.com/474x/c0/40/d2/c040d23711532a1a3ececc290ce071fc.jpg",
            total: 0,
            qty: 0
        },
        {
            name: "Es Teh",
            desc: "gula / tanpa gula",
            stock: 50,
            price: 4000,
            image: "https://i.pinimg.com/474x/73/06/4d/73064d620bea61db543dc8647762104d.jpg",
            total: 0,
            qty: 0
        }
    ],
},
    getters: {
        getData(state) {
            return state.product
        }
    },
    mutations: {
        ADD_PRODUCT(state, index) {
            if (state.product[index].stock > 0) {
                state.product[index].qty++;
                state.product[index].stock--;
                state.product[index].total = state.product[index].price * state.product[index].qty;
            }
        },
        DELETE_PRODUCT(state, index) {
            if (state.product[index].qty > 0) {
                state.product[index].stock++;
                state.product[index].qty--;
                state.product[index].total = state.product[index].price * state.product[index].qty;
            }
        },
        CLEAR_PRODUCT(state, index) {
            state.product[index].stock += state.product[index].qty;
            state.product[index].qty = 0;
            state.product[index].total = 0;
        }
    },
    actions: {
        addProduct(context, index) {
            context.commit('ADD_PRODUCT', index);
        },
        deleteProduct(context, index) {
            context.commit('DELETE_PRODUCT', index);
        },
        clearProduct(context, index) {
            context.commit('CLEAR_PRODUCT', index);
        }
    },
    modules: {

    }
})
