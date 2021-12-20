const Error_404 = () => import("../views/error/404.vue");
const Error_403 = () => import("../views/error/403.vue");
const Error_500 = () => import("../views/error/500.vue");

export default [
	{
		name: "404",
		path: "/404",
		meta: {
			title: "Notfound!",
		},
		component: Error_404,		
	},
	{
		name: "403",
		path: "/403",
		meta: {
			title: "Forbidden!",
		},
		component: Error_403,
	},
	{
		name: "500",
		path: "/500",
		meta: {
			title: "Server Error!",
		},
		component: Error_500,		
	},
];
