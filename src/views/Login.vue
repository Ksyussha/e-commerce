<template>
  <div
    style="
      background: linear-gradient(90deg, #e234a7, #ff8a00);
      padding-bottom: 10%;
    "
  >
    <div class="center">
      <div class="slider-thumb"></div>
      <div class="forms">
        <input type="text" name="first" placeholder="Write your name" />
        <input type="text" name="last" placeholder="Write your last name" />
        <input type="email" name="email" placeholder="Write your email" />
        <input
          type="password"
          name="password"
          placeholder="Write your password"
        />
        <button @click="createUser" class="card-text-button">Sign up</button>
      </div>
    </div>
    <div class="flx">
      <div class="line"></div>
    </div>
    <div class="center2">
      <div class="forms2">
        <input type="email" name="auth_email" placeholder="Write your email" />
        <input
          type="password"
          name="auth_password"
          placeholder="Write your password"
        />
        <button @click="getAuth" class="card-text-button">Sign in</button>
      </div>
    </div>

    <!-- <p>{{ me_email }}</p>
    <p>{{ me_id }}</p>
    <button @click="user_me">click</button> -->
  </div>
</template>

<script>
import { provideClient, useMutation, useQuery } from "@urql/vue";
import { ref } from "@vue/reactivity";
import axios from "axios";

export default {
  setup() {
    const me_email = ref("");
    const me_id = ref("");
    const status = [200, 201, 202, 203, 204]


    async function user_me() {
      const { data } = await axios.get("http://38.242.229.113:8055/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(data);
      me_email.value = data.data.email;
      me_id.value = data.data.id;
    }

    async function getAuth() {
      const password = document.querySelector(
        "input[name=auth_password]"
      ).value;
      const email = document.querySelector("input[name=auth_email]").value;
      const data = { email: email, password: password };
      const result = await axios.post(
        "http://38.242.229.113:8055/auth/login",
        data
      );
      localStorage.setItem("token", result.data.data.access_token);
      if (status.includes(result.status)){
        window.location.href = "/products";
      }
    }
    

    async function createUser() {
      const first = document.querySelector("input[name=first]").value;
      const last = document.querySelector("input[name=last]").value;
      const email = document.querySelector("input[name=email]").value;
      const password = document.querySelector("input[name=password]").value;
      const data = {
        first_name: first,
        last_name: last,
        email: email,
        password: password,
        role: "cf49ed74-e9df-451d-ae3a-9a77c07fcf7a",
      };
      axios
        .post("http://38.242.229.113:8055/users", data)
        .then(alert("Успешно зарегистрировались"));
    }
    return {
      getAuth,
      createUser,
      user_me,
      me_email,
      me_id,
    };
  },
};
</script>

<style scoped>
.forms {
  width: 363px;
  height: 496px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-area: 1/2;
}
.slider-thumb::before {
  content: "";
  width: 35%;
  height: 92%;
  background: #17141d;
  border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
  will-change: border-radius, transform, opacity;
  animation: sliderShape 5s linear infinite;
  display: block;
  z-index: 0;
  -webkit-animation: sliderShape 5s linear infinite;
}
.slider-thumb {
  grid-area: 1/2;
}
.center {
  display: grid;
  padding-top: 3%;
}
.center2 {
  display: flex;
  justify-content: center;
}
.forms2 {
  display: flex;
  flex-direction: column;
  width: 363px;
  height: 187px;

  text-align: center;
  align-items: center;
  justify-content: center;
}

input {
  width: 78%;
  line-height: 35px;
  text-align: center;
  margin: 22px 0px 0px 0px;
  z-index: 10;
  border-radius: 5px;
}
.card-text-button {
  padding: 3% 33%;
  border: #ffffff solid 1px;
  background-color: black;
  border-radius: 4%;
  color: white;
  font-weight: 700;
  opacity: 0.8;
  cursor: pointer;
  margin-top: 19px;
  border-radius: 5px;
}
.card-text-button:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
  z-index: 0;
}

.line {
  width: 400px;
  height: 2px;
  background-color: black;
  margin-top: 30px;
}
.flx {
  display: flex;
  justify-content: center;
}

@keyframes sliderShape {
  0%,
  100% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  34% {
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
  }
  50% {
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
  }
}

@media (max-width: 1440px) {
  .slider-thumb::before {
    content: "";
    width: 43%;
    height: 108%;
    background: #17141d;
    border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape-26084dc2 5s linear infinite;
    display: block;
    z-index: 0;
    -webkit-animation: sliderShape-26084dc2 5s linear infinite;
  }
  .center {
    width: 100%;
  }
  .center2 {
    width: 100%;
  }

  .forms {
    height: 321px;
  }
  .line {
    margin: 3% 0%;
  }
}
@media (max-width: 1280px) {
  .slider-thumb::before {
    content: "";
    width: 48%;
    height: 107%;
    background: #17141d;
    border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape-26084dc2 5s linear infinite;
    display: block;
    z-index: 0;
    -webkit-animation: sliderShape-26084dc2 5s linear infinite;
  }
  .center {
    width: 100%;
  }
  .center2 {
    width: 100%;
  }

  .forms {
    height: 321px;
  }
  .line {
    margin: 3% 0%;
  }
}
@media (max-width: 1024px) {
  .slider-thumb::before {
    content: "";
    width: 56%;
    height: 100%;
    background: #17141d;
    border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape-26084dc2 5s linear infinite;
    display: block;
    z-index: 0;
    -webkit-animation: sliderShape-26084dc2 5s linear infinite;
  }
  .center {
    width: 100%;
  }
  .center2 {
    width: 100%;
  }

  .forms {
    height: 321px;
  }
  .line {
    margin: 3% 0%;
  }
}
@media (max-width: 912px) {
  .slider-thumb::before {
    content: "";
    width: 60%;
    height: 100%;
    background: #17141d;
    border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape-26084dc2 5s linear infinite;
    display: block;
    z-index: 0;
    -webkit-animation: sliderShape-26084dc2 5s linear infinite;
  }
  .center {
    width: 100%;
  }
  .center2 {
    width: 100%;
  }

  .forms {
    height: 321px;
  }
  .line {
    margin: 3% 0%;
  }
}
@media (max-width: 768px) {
  .slider-thumb::before {
    content: "";
    width: 66%;
    height: 98%;
    background: #17141d;
    border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape-26084dc2 5s linear infinite;
    display: block;
    z-index: 0;
    -webkit-animation: sliderShape-26084dc2 5s linear infinite;
  }
  .center {
    width: 100%;
  }
  .center2 {
    width: 100%;
  }

  .forms {
    height: 321px;
  }
  .line {
    margin: 3% 0%;
  }
}
@media (max-width: 541px) {
  .slider-thumb {
    display: none;
  }
  .center {
    width: 100%;
  }
  .center2 {
    width: 100%;
  }

  .forms {
    height: 321px;
  }
  .line {
    margin: 0px;
  }
}
@media (max-width: 414px) {
  .slider-thumb {
    display: none;
  }
  .center {
    width: 100%;
  }
  .center2 {
    width: 100%;
  }
  .forms2 {
    width: 100%;
  }
  .forms {
    width: 100%;
    display: block;
    height: 355px;
  }
  .line {
    margin: 0px;
  }
}
@media (max-width: 320px) {
  .slider-thumb {
    display: none;
  }
  .center {
    width: 100%;
  }
  .center2 {
    width: 100%;
  }
  .forms2 {
    width: 100%;
  }
  .forms {
    width: 100%;
    display: block;
    height: 321px;
  }
  .line {
    margin: 0px;
  }
}
@media (max-width: 280px) {
  .slider-thumb {
    display: none;
  }
  .center {
    width: 100%;
  }
  .center2 {
    width: 100%;
  }
  .forms2 {
    width: 100%;
  }
  .forms {
    width: 100%;
    display: block;
    height: 321px;
  }
  .line {
    margin: 0px;
  }
}
</style>
