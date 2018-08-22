import Vue from 'vue'
import VueRouter from 'vue-router'

// ##### IMPORT COMPONENTS #####
import AdminComponent from "../components/admin/AdminComponent"
import CategoriesComponent from "../components/admin/pages/categories/CategoriesComponent"
import DeashboardComponent from "../components/admin/pages/dashboard/DashboardComponent"

Vue.use(VueRouter)

const routes = [
    {
        path: "/admin",
        component: AdminComponent, 
        name: "admin",
        children: [
            {path: "", component: DeashboardComponent, name: "dashboard"},
            {path: "categorias", component: CategoriesComponent, name: "categories"},
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router