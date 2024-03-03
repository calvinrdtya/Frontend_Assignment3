<template>
    <div class="align-center">
        <h1 class="text-center mt-5">Selamat datang di Warung Kos</h1>
        <img src="https://i.pinimg.com/564x/7b/92/38/7b92385ee809a3a3f9f43b5573b38bb3.jpg" alt="">
        <div class="tombol">
            <router-link to="/product">
                <button class="product">Makanan</button>
            </router-link>
            <router-link to="/cart">
                <button class="cart">Keranjang</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .align-center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    img {
        width: 20%;
    }
    .tombol{
        display: flex;
        justify-content: center;
    }
    button {
        cursor: pointer;
        padding: 5px;
        min-width: 100px;
        margin: 10px 4px 0 4px;
        border-radius: 10px;
    }
    button.product{
        background-color: lightblue;
    }
    button.cart{
        color: white;
        background-color: rgb(76, 136, 208);
    }
</style>
