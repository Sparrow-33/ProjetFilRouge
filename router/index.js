import { createWebHistory, createRouter} from "vue-router"

import HomeVue from "@/views/HomeVue"
import BlogVue from "@/views/BlogVue"
import SignIn from "@/views/SignIn"
import SignUp from "@/views/SignUp"
import DashBoard from "@/views/DashBoard"
import WritePost from "@/views/WritePost"
import notFound from "@/views/NotFound"
import ContactPage from "@/views/ContactPage"
import BlogPage from "@/views/BlogPage"
import NotFound from "@/views/NotFound"

const routes =[
    {
        path:"/",
        name:"home",
        component:HomeVue
    },
    {
        path:"/BlogVue",
        name:"blog",
        component:BlogVue

    },
    {
        path:"/SignIn",
        name:"SignIn",
        component:SignIn
    },
    {
        path:"/SignUp",
        name:"SignUp",
        component:SignUp
    },
    {
        path:"/DashBoard",
        name:"DashBoard",
        component:DashBoard
    },
    {
        path:"/WritePost",
        name:"WritePost",
        component: WritePost
    },
    {
        path:"/NotFound",
        name:"NotFound",
        component:notFound
    },
    {
        path:"/ContactPage",
        name:"ContactPage",
        component:ContactPage
    },
    {
        path:"/BlogPage",
        name:"BlogPage",
        component:BlogPage
    },
    { path: "/:pathMatch(.*)*", redirect: {path: '/NotFound'}, component:NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;