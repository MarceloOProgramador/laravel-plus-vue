import Vue from 'vue'
import VueRouter from 'vue-router'

// ##### IMPORT COMPONENTS #####
import CategoriesComponent from "../components/admin/pages/categories/CategoriesComponent"
import DeashboardComponent from "../components/admin/pages/dashboard/DashboardComponent"

Vue.use(VueRouter)

const routes = [
    {path: "/categorias", component: CategoriesComponent, name: "categories"},
    {path: "/", component: DeashboardComponent, name: "dashboard"},
]

const router = new VueRouter({
    routes
})

export default router