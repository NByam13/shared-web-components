
import {createPinia, defineStore} from "pinia";
import {ref} from "vue";

export const pinia = createPinia()

export const useCountStatStore = defineStore('countStat', () => {

    const globalCount = ref<number>(0)
    const increment = () => {
        globalCount.value += 1
    }

    return { globalCount, increment }
})
