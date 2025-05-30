import {defineCustomElement} from 'vue'
import CountWidgetCe from "./components/countWidget.ce.vue";
import './output.css'

export { CountWidgetCe }

export const register = () => {
    const element = defineCustomElement(CountWidgetCe)
    customElements.define('count-foobar', element)
}

