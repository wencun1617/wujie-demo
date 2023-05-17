<script setup lang="ts">
const beforeLoad = () => {
  console.log("beforeLoad");
};
const beforeMount = () => {
  console.log("beforeMount");
};
const afterMount = () => {
  console.log("afterMount");
};
const beforeUnmount = () => {
  console.log("beforeUnmount");
};
const afterUnmount = () => {
  console.log("afterUnmount");
};
const activated = () => {
  console.log("activated");
};
const deactivated = () => {
  console.log("deactivated");
};
</script>
:beforeLoad="beforeLoad"
:beforeMount="beforeMount"
:afterMount="afterMount"
:beforeUnmount="beforeUnmount"
:afterUnmount="afterUnmount" 
:activated="activated"
:deactivated="deactivated"
<template>
  <WujieVue
    :props="{ name: '小满', age: 24 }"
    url="http://127.0.0.1:5174/"
    name="vue3"
    :sync="true"
  ></WujieVue>
  <!--子应用vue3-->
</template>

<style scoped></style>
