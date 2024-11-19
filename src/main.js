import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import {createPinia} from "pinia";
import uviewPlus from 'uview-plus'
export function createApp() {
	const app = createSSRApp(App);
	const store = createPinia()
	app.use(store)
	app.use(uviewPlus)
	console.log(import.meta.env.VITE_BASE_API,'---------')
	return {
		app,
	};
}
