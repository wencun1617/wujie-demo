<template>
  <WujieVue
    :beforeLoad="beforeLoad"
    :beforeMount="beforeMount"
    :afterMount="afterMount"
    :beforeUnmount="beforeUnmount"
    :afterUnmount="afterUnmount"
    :activated="activated"
    :deactivated="deactivated"
    :props="{ info: '主应用通过props注入数据和方法,子应用通过$wujie来获取' }"
    url="http://127.0.0.1:5174/"
    name="vue3"
    :sync="true"
    :prefix="{
      webapp: '/child/application',
    }"
    :alive="true"
  ></WujieVue>
  <!--子应用vue3-->
</template>

<script setup lang="ts">
const beforeLoad = () => {
  console.log("%cvue-demo-beforeLoad",'color:orange');
};
const beforeMount = () => {
  console.log("%cvue-demo-beforeMount",'color:orange');
};
const afterMount = () => {
  console.log("%cvue-demo-afterMount",'color:orange');
  console.log("------------------------主应用------------------------");
  console.log(
    "window.document.querySelector('iframe[name=vue3]').contentWindow"
  );
  console.log(
    "返回一个 HTMLIFrameElement 对象。然后通过 .contentWindow  属性获取这个 iframe 元素的 contentWindow 对象，即代表 iframe 窗口的 Window 对象"
  );
  console.log(
    "%c 子应用vue3的window对象",
    "color:green",
    (window.document.querySelector("iframe[name=vue3]") as any)?.contentWindow
  );
};
const beforeUnmount = () => {
  console.log("%cvue-demo-beforeUnmount",'color:orange');
};
const afterUnmount = () => {
  console.log("%cvue-demo-afterUnmount",'color:orange');
};
const activated = () => {
  console.log("%cvue-demo-activated",'color:red');
};
const deactivated = () => {
  console.log("%cvue-demo-deactivated",'color:red');
};
</script>

<style scoped></style>
