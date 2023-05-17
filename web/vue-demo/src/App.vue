<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const handleJump = (url:any) => {
  router.push( `/${url}`);
};

import {ref} from 'vue'
let current = ref(0)
const send = () => {
  current.value++
}


</script>

<template>
  <div>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <h1>Vite + Vue</h1>
    <button @click="send">点击 {{ current }}</button>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <br>
    <button @click="handleJump('about')">
      about
    </button>
    <button @click="handleJump('profile')">
      profile
    </button>

    <router-view />
  </div>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
