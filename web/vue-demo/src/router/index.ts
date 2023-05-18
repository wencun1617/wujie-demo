//#region vue2使用vue-router

// import VueRouter from 'vue-router'
// import Vue from 'vue'

// 通过vue.use(插件),安装插件
// Vue.use(VueRouter)//vue内部会调用VueRouter.install的方法

// 配置组件和路径映射关系
// const routes = []

// const router = new VueRouter({
//   routes, //ES6的字面量增强写法
//   mode: "history", //默认是hash模式
//   linkActiveClass: "active", //统一修改router-link-active
// });

// export default router

// main.js中
// new Vue({
//   el: "#app",
//   router,
//   render: (h) => h(App),
// });
//#endregion

// vue2 mode history   vue3 createWebHistory
// vue2 mode hash      vue3 createWebHashHistory
// vue2 mode abstact   vue3 createMemoryHistory   SSR服务端渲染

declare module 'vue-router' {
  interface RouteMeta {
    titile?:string
  }
}
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/child/application/about",
    name: 'about',
    component: () =>
      import("@/components/about.vue")
  },
  {
    path: "/child/application/profile",
    name: 'profile',
    component: () =>
      import("@/components/profile.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//#region createWebHashHistory hash
// 浏览器左右箭头切换
// window.addEventListener('hashchange',(e) => {
// console.log(e)
// })
//#endregion

//#region createWebHashHistory history
// history 提供了pushState和replaceState , 这两种方法改变URL的path部分不会引起页面的刷新

// popstate
// 1.通过浏览器前进后退改变URL时会触发 popstate
// 2.通过pushState/replaceSate或<a></a>标签改变URL不会触发popstate
// 3.可以通过拦截 pushState/replaceSate的调用和 <a></a>标签的点击事件来检测URL变化
// 4.通过js调用history的back,go,forward方法触发该事件
// 监听URL的变化可以实现，比 hashchange 不方便

// window.addEventListener('popstate',(e) => {
//     console.log(e)
// })
// history.pushState({state:'温存'},'标题哈哈','/custom-vue-plugin')
//#endregion
export default router;
