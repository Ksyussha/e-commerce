<template>
  <div>
    <div class="cont"
    style="
          width: 1141px;
      margin: 0 auto;
      background-color: #f6f6f6;
      padding-bottom: 10%;
    ">
    <div class="flex1">
    <h1>GOODS</h1></div>
    <div v-for="p in productsCart" :key="p?.id">
    <div class="cartscard">
      <div class="forx">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</div>
        <div class="flex">
            <div class="img">
        <img
              :src="
                'http://38.242.229.113:8055/assets/' +
                p?.image?.id +
                '?width=210&height=218&fit=cover'
              "
              alt="" 
            />
            </div>
            <div class="txt">
      <p>{{p?.title}}</p>
      <p>{{p?.description}}</p>
      <p>{{p?.price}} $</p>
      </div>
      </div>
      </div>
      </div>
    </div>
</div>
</template>

<script>
import { useProductsStore } from "../stores/productsCart";
import { onMounted } from "vue";
export default {
  setup() {
    const store = useProductsStore();
    const getProducts = store.getProductsCart;
    const productsCart = store.productsCart;


    onMounted(() => {
      store.fetchProductsCart();

    });

    return {
      getProducts,
      productsCart,


    };
  },
};
</script>

<style scoped>
.flex{
    display: flex;
    align-items: center;

}
.cartscard{
     border: 10px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(to left, #e234a7, #ff8a00);
  border-left-style: none;
  border-right-style: none;
  border-top-style: none;
  margin: 37px 0px 0px 0px;
    padding-bottom: 35px;

}
.line{
    width: 100%;
    height: 2px;
        background-color: black;
}
.flex1 {
    display: flex;
    align-items: center;
    padding-top: 4%;
    justify-content: center;
}
.txt {
    margin-left: 4%;
}
h1{
        color: black;
    font-size: 53.5px;
    text-transform: uppercase;
    margin: 0px;
    font-weight: lighter;
}
svg.h-6.w-6 {
    /* font-size: 20px; */
    width: 34px;
    height: 34px;
}
.forx{
  display: flex;
      justify-content: flex-end;
      cursor: pointer;
}
</style>