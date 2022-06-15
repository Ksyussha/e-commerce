<template>
  <div>
    <div v-if="fetching">Loading...</div>
    <div v-else-if="error">Oh no... {{ error }}</div>
    <div v-else>
      <div v-if="data">
        <div class="product-card">
          <div class="images">
            <img :src="'http://38.242.229.113:8055/assets/' + data.products_by_id.image.id" alt="">
          </div>
          <div class="card-textin">
            <div class="card-text">
              <h2 class="title">{{ data.products_by_id.title }}</h2>
              <p class="description">{{ data.products_by_id.description }}</p>
              <div class="price-and-cart">
                <p class="price">{{ data.products_by_id.price }} $</p>
<<<<<<< HEAD
                <a href="#"><button class="card-text-button" @click="addToCart(data.products_by_id.id)">add to cart</button></a>
=======
                <a href="#"><button class="card-text-button">add to cart</button></a>
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useQuery, useMutation } from "@urql/vue";
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const id = +route.params.id;
    const result = useQuery({
      query: `
        query getProduct($id: ID!) {
          products_by_id(id: $id) {
            id
            title
            price
            spec
            description
            image {
              id
            }
          }
        }
      `, variables: { id }
    });

    const addToCartP = useMutation(
       `
    mutation ($ProductId: Int!, $UserId: String!) {
  create_junction_directus_users_products_1_item(
    data: { products_id: $ProductId, directus_users_id: $UserId }
  ) {
    id
  }
}
      ` 
    ); 
    async function addToCart(id) {
      const { data } = await axios.get("http://38.242.229.113:8055/users/me", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const i = id
      const a = parseInt(i)
      const u = data.data.id
      const variables = { ProductId: a, UserId: u }
      addToCartP.executeMutation(variables).then((result) => {
        if (result.error) {
          console.error("Oh no!", result.error);
        }
      });
    }

    return {
      fetching: result.fetching,
      data: result.data,
      error: result.error,
      route,
      addToCart
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

.h1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 65px 0px 50px;
  color: black;
  background-color: #f6f6f6;
  margin-top: 30px;
}

.h1a {
  font-size: 28px;
  color: black;
  text-decoration: none;
  font-weight: bolder;
}

.product-card {
  display: flex;
  padding: 44px 50px;
  background-color: #f6f6f6;
  align-items: center;
}

.product-card img {
  width: 553px;
  margin-right: 0px;
  padding: 0px 0px;
  background-color: #f6f6f6;
  margin-left: 214px;

}

.card-text {
  width: 721px;
  padding-left: 55px;
}

.card-textin {
  width: 900px;
}

.images {
  width: 862px;
  background-color: #f6f6f6;
  border: 1px solid black;
  border-left-style: none;
  border-bottom-style: none;
  border-top-style: none;
}

.price {
  font-size: 33px;
  font-weight: 700;
  color: #000000;
  margin-right: 15px;
}

.title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 32px;
}

.card-text-button {
  padding: 10px 20px;
  border: #ffffff solid 1px;
  background-color: black;
  border-radius: 4%;
  color: white;
  font-weight: 700;
  opacity: 0.8;
  cursor: pointer;
}

.price-and-cart {
  display: flex;
  align-items: center;
  margin: 20px 0px;
  margin-left: 403px;
}

.card-text-button:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}

.description {
  color: black;
  line-height: 1.6;
  font-size: 20.5px;
}
</style>