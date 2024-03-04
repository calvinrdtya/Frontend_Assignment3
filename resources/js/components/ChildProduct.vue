<template>
    <div>
        <h1>Semua Product</h1>
            <router-link to="/">
                <button class="back">Back</button>
            </router-link>
            <router-link to="/cart">
                <button class="cart">Keranjang</button>
            </router-link>
                <div class="container-card">
                    <div v-for="(item, index) in listproduct" :key="index" class="card">
                        <img :src="item.image" alt="Product Image" style="width:100%">
                        <div class="container">
                            <h4><b>{{ item.name }}</b></h4>
                            <p>Price: {{ 'Rp.' + item.price }}</p>
                            <p>Description: {{ item.desc }}</p>
                            <p>Stock: {{ item.stock }}</p>
                        </div>
                            <div class="btn-group">
                                <button type="button" @click="addProduct(index)" v-if="item.stock > 0">Add to cart</button>
                                <button type="button" @click="addAllStock(index)" v-if="item.stock > 0">Add All Stock</button>
                                <span v-if="item.stock === 0">Stock Habis</span>
                            </div>
                        </div>
                    </div>
        <!-- <table>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            <tr v-for="(item, index) in listproduct" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.desc }} </td>
                <td>{{ item.stock }} </td>
                <td>{{ 'Rp.'+item.price }}</td>
            <td>
                <button type="button" @click="addProduct(index)" v-if="item.stock > 0">Add to cart</button>
                <button type="button" @click="addAllStock(index)" v-if="item.stock > 0">Add All Stock</button>
                <span v-if="item.stock === 0">Stock Habis</span>
            </td>
            </tr>
        </table> -->
    </div>
</template>

<script>
    export default {
        props: {
        listproduct: {
            type: Array,
            default: () => {
            return [];
            }
        }
        },
        methods: {
        addProduct(index) {
            this.$emit("emitAdd", index);
        },
        openAddToCartModal(index) {
            this.addToCartModal.product = this.listproduct[index];
            this.addToCartModal.show = true;
        },
        openAddAllStockModal(index) {
            this.addAllStockModal.product = this.listproduct[index];
            this.addAllStockModal.show = true;
        },
        addToCart(product) {
            console.log('Added to cart:', product);
            this.closeModal();
        },
        closeModal() {
            this.addToCartModal.show = false;
            this.addAllStockModal.show = false;
        },
        addAllStock(index) {
            const item = this.listproduct[index];
            const quantityToAdd = item.stock;
            for (let i = 0; i < quantityToAdd; i++) {
            this.addProduct(index);
            }
        }
    }

}
</script>

<style scoped>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        padding: 20px;
        z-index: 2;
    }
    h1 {
        text-align: center;
    }
    .btn-group {
        justify-content: center;
    }
    .container-card {
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 20%;
        margin: 10px;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    .container {
        padding: 5px;
    }
    img {
        width: 100% !important;
    }
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
        background-color: lightblue;
        cursor:pointer;
    }
    div {
        margin: 20px;
    }
</style>
