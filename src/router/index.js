
import Vue from 'vue';
import Router from 'vue-router';
import a from '../components/a.vue';

Vue.use(Router);

const routes = [
	{
		path: '*',
		redirect: '/Login',
	},
	{
		path: '/Login',
		component: () => import('../components/Login.vue'),
	},
	{
		path: '/SignIn',
		component: () => import('../components/SignIn.vue'),
	},
	{
		path: '/a',
		component: a,
	},
	{
		path: '/',
		component: () => import('../components/Login.vue'),
	}
]

const router = new Router({
	mode: 'history',
	routes
})
export default router