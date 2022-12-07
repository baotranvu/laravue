import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/DashBoard.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import DefaultLayout from "../components/DefaultLayout.vue";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        component: DefaultLayout,
        meta: { requireAuth: true },
        children: [
            {
                path: "/dashboard",
                name: "DashBoard",
                component: Dashboard,
            },
            {
                path: "/login",
                name: "Login",
                component: Login,
            },
            {
                path: "/register",
                name: "Register",
                component: Register,
            },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        console.log(from);
        next({ name: "Login" });
    } else {
        next();
    }
});
export default router;
