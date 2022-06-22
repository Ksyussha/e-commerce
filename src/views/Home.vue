<template>
  <div
    class="cont"
    style="width: 1465px; margin: 0 auto; background-color: #f6f6f6"
  >
    <div class="hi">
      <h1>WELCOME!</h1>
      <h2>The best way to buy the products you love.</h2>
    </div>
  </div>
  <div class="img">
    <img src="./images/Снимок экрана (1).png" alt="" />
  </div>
</template>

<script>
export default {
  setup() {
    
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
.hi {
  display: flex;
  flex-direction: column;
    align-items: center;
}
.hi h1 {
      color: black;
    font-size: 53.5px;
    text-transform: uppercase;
    margin: 0px;
    font-weight: lighter;
    margin-top: 64px;
}
.hi h2{
  color: #ff8a00;
    font-weight: lighter;
}
</style>