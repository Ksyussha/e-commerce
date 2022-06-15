<template>
  <div>
    <div class="menu">
<<<<<<< HEAD
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
        <h1>Apple</h1>
      </div>
      <div class="menuu">
        <RouterLink to="/">Home</RouterLink>
        <p style="color: #2c5592">|</p>
        <RouterLink to="/products">Products</RouterLink>
        <p style="color: #2c5592">|</p>
        <RouterLink to="/login">Login</RouterLink>
      </div>
    </div>
=======
      <div style="display: flex;align-items: baseline;font-size: 49.5px;font-weight: 600;color: rgb(0 0 0);font-weight: initial;">
      <h1 class="pine">pine</h1><h1>Apple</h1></div>
    <div class="menuu"><RouterLink to="/">Home</RouterLink> <p style="color:#2c5592">|</p>
    <RouterLink to="/products">Products</RouterLink>
    </div></div>
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
    <RouterView />
  </div>
</template>

<script>
<<<<<<< HEAD
import { createClient, provideClient } from "@urql/vue";
=======
import { createClient, provideClient } from '@urql/vue';
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
export default {
  setup() {
    const client = createClient({
      url: "http://38.242.229.113:8055/graphql",
      fetchOptions: () => {
<<<<<<< HEAD
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
=======
      const auth = 1
      const token = auth === 0 ? localStorage.getItem('token') : null
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' }
      };
    },
    });

    provideClient(client);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
.menu{ 
    background-color: #f6f6f6;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* box-shadow: rgb(44 85 146) 0px 19px 38px -29px inset; */
}
.menu h1{ 
      font-weight: initial;
      font-size: unset;
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
}
.menuu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
<<<<<<< HEAD
a {
  text-decoration: none;
  background: -webkit-linear-gradient(#e234a7, #ff8a00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0px 10px 0px 10px;
  font-size: unset;
  text-transform: uppercase;
  font-weight: bold;
=======
a{
text-decoration: none;
color: #000000;
padding: 0px 10px 0px 10px;
font-size: unset;
text-transform: uppercase;
font-weight: bold;
>>>>>>> 07218ffa14bb73d598ca810bb9e102fad6e6beb0
}
p{
  background: -webkit-linear-gradient(#e234a7, #ff8a00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.pine {
  color: #e234a7;
}
</style>


 