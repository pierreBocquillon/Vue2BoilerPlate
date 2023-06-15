import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: "home",
	},
    {
        path: '/home',
        name: 'Home',
        component: () => import("@/views/Home.vue"),
        meta: {
            title: 'Accueil',
        }
    },
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	scrollBehavior() {
		return { x: 0, y: 0 }
	},
})

router.beforeEach((to, from, next) => {
    next()
})
router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = "APP NAME" + (to.meta.title ? " - " + to.meta.title : "");
    })
})

export default router
