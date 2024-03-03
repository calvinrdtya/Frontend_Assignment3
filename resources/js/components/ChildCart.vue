<template>
    <div>
        <h2>Keranjang Belanja</h2>

    <table>
        <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        <tr v-for="(item, index) in cartproduct" :key="index">
            <td v-if="item.qty>0">{{ item.name }}</td>
            <td v-if="item.qty>0">{{ item.qty }}</td>
            <td v-if="item.qty>0">{{ 'Rp.'+item.price*item.qty }}</td>
            <td v-if="item.qty>0">
            <button type="button" @click="deleteProduct(index)">Delete</button>
            <button type="button" @click="clearProduct(index)">Clear All Stock</button>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="bold">Total</td>
            <td colspan="2">{{ 'Rp.' + totalCheckout }}</td>
        </tr>
    </table>
        <!-- checkout button -->
        <!-- button back -->
        <router-link to="/">
            <button class="back">Back</button>
        </router-link>
        <button type="button" class="checkout" @click="checkout">Checkout</button>
    </div>
</template>

<script>
export default {
    props: {
        cartproduct: {
        type: Array,
        default: () => {
            return [];
        }
        }
    },
    data() {
        return {
            totalCheckout: 0,
        };
    },
    methods: {
        calculateTotal() {
            this.totalCheckout = this.cartproduct.reduce((total, item) => total + item.total, 0);
        },
        deleteProduct(index) {
            this.$emit('emitDelete', index);
            this.calculateTotal();
        },
        checkout() {
            this.calculateTotal();
            alert('total bayar : Rp.' + this.totalCheckout);
        },
        clearProduct(index) {
            this.$emit('emitClear', index);
            this.calculateTotal();
        },
    },
    created() {
        this.calculateTotal();
    },
}
</script>

<style scoped>
    table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    button {
        padding: 5px 10px;
        border-radius: 10px;
        background-color: lightsalmon;
        cursor: pointer;
    }
    div {
        margin: 20px;
    }
    .bold {
        font-weight: bold;
    }
    .checkout {
        margin-top: 10px;
        background-color: lightgreen;
    }
</style>
