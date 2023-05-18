<template>
<div>
    <h1>这是主应用</h1>
    <router-link to="vue3">vue3</router-link>
    <router-link style="margin-left: 10px;" to="react">react</router-link>
  
    
    <router-view></router-view>
</div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
import {bus} from 'wujie'
console.log("🚀 ~ file: App.vue:15 ~ bus:", bus)


bus.$on('vue3', (...args:any[]) => {
    console.log(args,'我是主应用')
})
</script>

<style scoped lang='less'>
</style>