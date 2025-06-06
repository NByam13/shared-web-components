import { default as SalesCompsTableWidgetCe } from './components/salesCompsTableWidget.ce.vue';
declare module 'vue' {
    interface GlobalComponents {
        'sales-comps-table': typeof SalesCompsTableWidgetCe;
    }
}
export declare const register: () => void;
declare const count: import('vue').VueElementConstructor<{}>;
declare const api: import('vue').VueElementConstructor<{}>;
declare const salesCompsTable: import('vue').VueElementConstructor<import('./components/salesComps').TableProps>;
export { count, api, salesCompsTable };
