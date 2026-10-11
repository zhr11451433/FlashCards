import { createRouter, createWebHistory } from "vue-router";
import StartView from "@/views/StartView.vue";
import GameView from "@/views/GameView.vue";

const routes = [
    {path:'/',name:'start',component:StartView},
    {path:'/game',name:'game',component:GameView},
]

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router