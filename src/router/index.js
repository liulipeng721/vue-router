import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // redirect:"login",
    name: "Login",  
    component: Login 
  },
  {
    path: "/home",
    name: "Home",
    component: Home

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, form, next)=>{
  console.log("router--beforeEach");

  console.log("router-to", to);
  console.log("router-form", form);
  next();
})

router.afterEach((to, form)=>{
  console.log("router--afterEach"); 
  console.log("afterEach-to", to);
  console.log("afterEach-form", form);
})


export default router;
