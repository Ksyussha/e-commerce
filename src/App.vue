<template>
  <div>
    <div class="menu">
      <div
        style="
          display: flex;
          align-items: baseline;
          font-size: 49.5px;
          font-weight: 600;
          color: rgb(0 0 0);
          font-weight: initial;
        "
      >
        <h1 class="pine">pine</h1>
        <h1 style="background: -webkit-linear-gradient(#e234a7, #ff8a00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;">Apple</h1>
      </div>
      <div class="menuu">
        <RouterLink to="/" class="hover">Home</RouterLink>
        <p style="color: #2c5592">|</p>
        <RouterLink to="/products" class="hover">Products</RouterLink>
        <p style="color: #2c5592">|</p>
        <RouterLink to="/login" class="hover">Login</RouterLink>
        <p style="color: #2c5592">|</p>
        <RouterLink to="/cart" class="hover">Cart</RouterLink>
        <p style="color: #2c5592">|</p>
        <RouterLink to="/favourite" class="hover">Favourite</RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script>
import { createClient, provideClient } from "@urql/vue";
export default {
  setup() {
    const client = createClient({
      url: "http://38.242.229.113:8055/graphql",
      fetchOptions: () => {
        const token = localStorage.getItem("token");
        return {
          headers: { authorization: token ? `Bearer ${token}` : "" },
        };
      },
    });

    provideClient(client);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
.hover:hover{
  color:#e234a7;
}
.menu {
  background-color: #f6f6f6;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source: linear-gradient(to left, #e234a7, #ff8a00);
  border-left-style: none;
  border-right-style: none;
  border-top-style: none;
}
.menu h1 {
  font-weight: initial;
  font-size: unset;
}
.menuu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
a {
  text-decoration: none;
  color: black;
  padding: 0px 10px 0px 10px;
  font-size: unset;
  text-transform: uppercase;
  font-weight: bold;
}
p{
  color: black;
}
.pine {
  color: #e234a7;
}
</style>


 