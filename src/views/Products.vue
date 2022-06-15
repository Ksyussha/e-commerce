<template>
  <div>
    <div class="backgroundin">
      <div class="background">
        <div class="h1">
          <h1>Products</h1>
        </div>
      </div>
<<<<<<< HEAD
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
              <div>
                <a @click="addFav(p.id)"> ♡ </a>
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
            <div class="forPrice">
              <!-- <p style="color:#aac6de; font-weight: bold;">PRICE:</p> -->
              <p
                style="c    color: rgb(0 0 0);font-weight: bold;font-size: 21.5px;"
              >
                {{ p.price }}$
              </p>
            </div>
=======
    </div>
    <div class="cont" style="width: 1465px; margin:0 auto; background-color: #f6f6f6; padding-bottom: 10%;">
      <div class="flx">
        <input type="text" v-model="search" placeholder="search..." />
      </div>
      <div v-if="fetching">Loading...</div>
      <div v-else-if="error">Oh no... {{ error }}</div>
      <div v-else>
        <div v-if="data">
          <div class="flex">
            
            <div v-for="p in data.products" :key="p.id" @click="move(p.id)" class="product_card">
            <div class="fl">
              <div>
            <a href=""> ♡ </a>
            </div>
            </div>
              <img :src="
                'http://38.242.229.113:8055/assets/' +
                p.image.id +
                '?width=210&height=218&fit=cover'
              " alt="" />
              <p>{{ p.title }}</p>
              <div class="forPrice">
                <!-- <p style="color:#aac6de; font-weight: bold;">PRICE:</p> -->
                <p style="c    color: rgb(0 0 0);font-weight: bold;font-size: 21.5px;">{{ p.price }}$</p>
              </div>
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
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
<<<<<<< HEAD
import { ref } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
=======
import { ref } from 'vue'

import { useRouter, useRoute } from "vue-router";
import { onMounted } from '@vue/runtime-core';

>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0

export default {
  setup() {
    const search = ref(null);
    const router = useRouter();
    const route = useRoute();
<<<<<<< HEAD
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
=======


    const add = useMutation(`  
       
    mutation ($ProductId: Int!, $UserId: String!) {
  create_junction_directus_users_products_item(
    data: { products_id: $ProductId, directus_users_id: $UserId }
  ) {
    id
  }
}`


    );

    



    const result = useQuery({
      query: gql` 
        query ($search: String) {
          products(search: $search) {
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
            id
            title
            price
            image {
              id
            }
          }
<<<<<<< HEAD
        }
      `, variables: { search, limit }
=======
        }`
      ,
      variables: { search },
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
    });

    function searchProducts() {
      result.executeQuery()
    }


    function move(id) {
      router.push("/products/" + id);
    }

    async function addFav(id) {
<<<<<<< HEAD
      const { data } = await axios.get("http://38.242.229.113:8055/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const i = id;
      const a = parseInt(i);
      const u = data.data.id;
      const variables = { ProductId: a, UserId: u };
=======
      const i = id
      const a = parseInt(i)
      const u = "518c6ae4-9919-4f5c-a494-81a4c8e562a3"
      const variables = { ProductId: a, UserId: u }
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
      add.executeMutation(variables).then((result) => {
        if (result.error) {
          console.error("Oh no!", result.error);
        }
      });
    }

<<<<<<< HEAD
=======

>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
    return {
      search,
      fetching: result.fetching,
      data: result.data,
      error: result.error,
      searchProducts,
      move,
<<<<<<< HEAD
      addFav,
      limit
=======
      addFav
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
    };
  },
};
</script>

<style scoped>
<<<<<<< HEAD
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");

=======
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

/* .backgroundin{ 
  background-color: #ffffff;
  padding: 10px 0px 0px 0px; 
  height: 600px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

} */
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
.backgroundin {
  background-image: url(https://www.apple.com/v/iphone/home/bh/images/overview/retail/why_apple__ezn1ktvka6oi_large.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
<<<<<<< HEAD
  border: 10px solid;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source: linear-gradient(to left, #e234a7, #ff8a00);
  border-right-style: none;
  border-left-style: none;
  border-top-style: none;
=======
  border: 1px solid black;
    border-right-style: none;
    border-left-style: none;
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
}

.h1 {
  height: 548px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
<<<<<<< HEAD
=======

>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
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
<<<<<<< HEAD

.product_card:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.product_card a {
  text-decoration: none;
  color: #e234a7;
  font-size: 30px;
}

.product_card a:hover {
  text-decoration: none;
  color: #e234a7;
  font-weight: bold;
}

.fl {
  margin-left: 176px;
}
=======
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0

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
  align-items: baseline;
}
<<<<<<< HEAD

.limit {
  display: flex;
  justify-content: center;
}

.btn {
  margin-top: 113px;
  cursor: pointer;
  font-size: 24px;
  color: #121111;
}
</style>
=======
</style>
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
