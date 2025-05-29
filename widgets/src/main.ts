import {createApp, defineCustomElement} from 'vue'
import './style.css'
import CountWidgetCe from "./components/countWidget.ce.vue";
import App from "./App.vue";

export { CountWidgetCe }

export const register = () => {
    const element = defineCustomElement(CountWidgetCe)
    customElements.define('count-foobar', element)
}

createApp(App).mount('#app')
