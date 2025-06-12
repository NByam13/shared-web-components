<script setup lang="ts">
import { ref } from 'vue'
import {pinia, useCountStatStore} from "@/components/useCountStatStore";

const count = ref(0)
const store = useCountStatStore(pinia)
const countUp = () => {
    count.value++
    store.increment()
}
</script>

<template>
    <p>Total Count across the page: {{ store.globalCount }}</p>
    <button class="btn" type="button" @click="countUp">count is {{ count }}</button>
</template>

<style >
@import "../output.css";
</style>
