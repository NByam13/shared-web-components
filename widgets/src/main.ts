import {defineCustomElement} from 'vue'
import CountWidgetCe from "./components/countWidget.ce.vue";

export { CountWidgetCe }

export const register = () => {
    const element = defineCustomElement(CountWidgetCe)
    customElements.define('count-foobar', element)
}

