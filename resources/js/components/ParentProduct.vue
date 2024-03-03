<template>
    <div>


    <!-- from child product -->
    <list-component :listproduct="listProduct" @emitAdd="addProduct"/>

    <!-- button back -->

    <!-- button cart -->

    <!-- from parent cart -->
    <!-- <cart-component :cartproduct="listProduct" @emitDelete="deleteProduct" @emitClear="clearProduct"/> -->
    </div>
</template>

<script>
import{mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed:{
        ...mapGetters({
        listProduct:'getData'
        })
    },
    methods: {
        addProduct(index) {
        this.$store.dispatch('addProduct', index);
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
    button{
        padding: 5px 10px;
        margin: 10px 4px 0 15px;
        border-radius: 10px;
        cursor: pointer;
    }
    button.back{
        background-color: lightsalmon;
    }
</style>'ij. j'
