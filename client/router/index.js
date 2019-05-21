import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import ContentView from '../components/ContentView.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "LandingPage"
            }
        },
        {
            path: '/LandingPage',
            name: 'LandingPage',
            component: LandingPage
		},
		{
			path: '/ContentView',
			name: 'ContentView',
			component: ContentView
		}
    ]
})