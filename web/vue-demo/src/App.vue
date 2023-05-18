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
    <br />

    <div v-if="__POWERED_BY_WUJIE__">
      <div>
        存在wujie, wujie会在window对象中注入一些全局变量 
        <a href="https://wujie-micro.github.io/doc/guide/variable.html" target="_blank">
          全局变量|wujie文档
        </a>
      </div>
      <h3>
        wujie三种通信方式
      </h3>
      <h4>1.props</h4>
      <h4>2.window 通信</h4>
      <h4>3.eventBus 通信 ==> </h4>
      <button @click="handleSubmit">子应用发送事件</button>
    </div>


    <br/>
    <button @click="handleJump('about')">跳转about</button>
    <button @click="handleJump('profile')">跳转profile</button>

    <router-view />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref,computed } from "vue";
const router = useRouter();

const handleJump = (url: any) => {
  router.push(`/child/application/${url}`);
};


let current = ref(0);
const send = () => {
  current.value++;
};

//--------------------------------wujie-------------------------------------------
const __POWERED_BY_WUJIE__ = computed(() => {
  return window?.__POWERED_BY_WUJIE__
})
const wujieProps = computed(() => {
  return window.$wujie?.props || ''
})
console.log("------------------------vue3子应用------------------------")
console.log("%cwindow 通信", "font-size: 20px;font-weight: bold;");
console.log("%c由于子应用运行的iframe的src和主应用是同域的，所以相互可以直接通信", "font-size: 16px;");
console.log("%c子应用调用主应用的全局数据", "font-size: 16px;");
console.log("%cwindow.parent", "font-size: 16px;color:green",window.parent);



const handleSubmit = () => {
  window.$wujie?.bus.$emit("vue3", ['vue3'],{info:'vue3子应用 发送事件' });
}
</script>

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
