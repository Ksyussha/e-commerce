<template>
  <div>
    <div class="backgroundin">
      <div class="background">
        <div class="h1">
          <h1>Products</h1>
        </div>
      </div>
    </div>
    <!-- <div v-for="c in data.categories" :key="c.id" class="categories"> -->
    <!-- <button @click="move(c.id)">{{ c.title }}</button> -->
  </div>
  <div
    class="cont"
    style="
      width: 1465px;
      margin: 0 auto;
      background-color: #f6f6f6;
      padding-bottom: 10%;
    "
  >
    <div class="flx">
      <input type="text" v-model="search" placeholder="search..." />
    </div>
    <div v-if="fetching">Loading...</div>
    <div v-else-if="error">Oh no... {{ error }}</div>
    <div v-else>
      <div v-if="data">
        <div class="flex">
          <div
            v-for="p in data.products"
            :key="p.id"
            class="product_card"
          >
            <div class="fl">
              <div class="fav">
                <a @click="addFav(p.id)"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg> </a>
              </div>
            </div>
            <div class="formove" @click="move(p.id)">
            <img
              :src="
                'http://38.242.229.113:8055/assets/' +
                p.image.id +
                '?width=210&height=218&fit=cover'
              "
              alt="" 
            />
            <p>{{ p.title }}</p>
            </div>
            
            <div class="forPrice">
              <!-- <p style="color:#aac6de; font-weight: bold;">PRICE:</p> -->
              <p
                style="c    color: rgb(0 0 0);font-weight: bold;font-size: 21.5px;"
              >
                {{ p.price }}$
              </p>
              
            
              <div class="fl">
              <div class="cart">
                <a @click="addToCart(p)"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg> </a>
              </div>
            </div>
            </div>
            </div>
            
          
        </div>
        <div class="limit">
          <a @click="limit += 8" class="btn">show more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuery, gql, useMutation } from "@urql/vue";
import { ref } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { addToCart } from "../../utils/cart";

export default {
  setup() {
    const search = ref(null);
    const router = useRouter();
    const route = useRoute();
    const limit = ref(8)
    const add = useMutation(
      gql`
        mutation ($ProductId: Int!, $UserId: String!) {
          create_junction_directus_users_products_item(
            data: { products_id: $ProductId, directus_users_id: $UserId }
          ) {
            id
          }
        }
      `
    );

    const result = useQuery({
      query: gql`
        query($search: String, $limit: Int! = 8) {
          products(search: $search, limit: $limit) {
            id
            title
            price
            description
            image {
              id
            }
          }
        }
      `, variables: { search, limit }
    });

    function searchProducts() {
      result.executeQuery()
    }


    function move(id) {
      router.push("/products/" + id);
    }

    async function addFav(id) {
      const { data } = await axios.get("http://38.242.229.113:8055/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const i = id;
      const a = parseInt(i);
      const u = data.data.id;
      const variables = { ProductId: a, UserId: u };
      add.executeMutation(variables).then((result) => {
        if (result.error) {
          console.error("Oh no!", result.error);
        }
      });
    }

    return {
      search,
      fetching: result.fetching,
      data: result.data,
      error: result.error,
      searchProducts,
      move,
      addFav,
      addToCart,
      limit
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");

.fav:onclick{
  fill: #e234a7;
stroke: #e234a7;
}
.fav{
  width: 25px;
}

.backgroundin {
  background-image: url(https://www.apple.com/v/iphone/home/bh/images/overview/retail/why_apple__ezn1ktvka6oi_large.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source: linear-gradient(to left, #e234a7, #ff8a00);
  border-right-style: none;
  border-left-style: none;
  border-top-style: none;
}

.h1 {
  height: 548px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
}

.h1 h1 {
  color: black;
  font-size: 56.5px;
  text-transform: uppercase;
  margin: 0px;
  font-weight: initial;
}

h1 {
  color: black;
  font-weight: initial;
}

.product_card {
  width: 266px;
  border: 1px solid #ffffff00;
  border-radius: 6px;
  margin: 56px 35px 0px 35px;
  padding: 25px 11px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: all 0.2s ease-in-out;
  background-color: #f6f6f6;
}

.product_card:hover {
  transform: scale(1.1);
  cursor: pointer;
}

/* .product_card svg {
  
  color: #e234a7;
  
} */

.product_card svg:hover {
  color: #e234a7;
}

.fl {
  margin-left: 176px;
}

.product_card:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.product_card a{ 
  text-decoration: none;
      color: black;
      font-size: 30px;
}
.product_card a:hover{ 
  text-decoration: none;
      color: black;
      font-weight: bold;
}
.fl{
      margin-left: 176px;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}

input {
  margin: 36px 0px 0px 0px;
  height: 24px;
  width: 249px;
  margin-right: 88px;
  border-color: black;
  border-radius: 7px;
  border: 1px solid;
}

.flx {
  display: flex;
  justify-content: flex-end;
}

.forPrice {
  display: flex;
  align-items: center;
}
/* svg{
  width: 11%;
} */
.cart{
     width: 25px;
 
}

.limit {
  display: flex;
  justify-content: center;
}

.btn {
  margin-top: 113px;
  cursor: pointer;
  font-size: 24px;
  background: -webkit-linear-gradient(#e234a7, #ff8a00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
