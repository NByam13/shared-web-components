import {defineCustomElement} from 'vue'
import CountWidgetCe from "./components/countWidget.ce.vue";
import ApiWidgetCe from "./components/apiWidget.ce.vue";
import SalesCompsTableWidgetCe from "./components/salesCompsTableWidget.ce.vue";

export { CountWidgetCe, ApiWidgetCe, SalesCompsTableWidgetCe }

export const register = () => {
    const count = defineCustomElement(CountWidgetCe)
    customElements.define('count-foobar', count)

    const api = defineCustomElement(ApiWidgetCe)
    customElements.define('api-foobar', api)

    const salesCompsTable = defineCustomElement(SalesCompsTableWidgetCe)
    customElements.define('sales-comps-table', salesCompsTable)
}

