<script setup lang="ts">
import {computed,  ref} from "vue";
import type {SalesCompsTransaction } from "@/components/salesComps";

interface TableProps {
    token: string,
    basepath: string,
    marketId: string,
    region: string,
    sectorId: string,
    withGrades: string,
    marketLevelId: string
}

const url = 'api/market_data/markets/150/sales_comps'
const props = defineProps<TableProps>()

const salesCompsData = ref<SalesCompsTransaction[]>()
const isLoading = ref<boolean>(false)
const error = ref<string>()
const path = computed(() => {
    const params = new URLSearchParams()
    params.set("marketId", props.marketId.toString())
    params.set("region", props.region)
    params.set("withGrades", props.withGrades)
    params.set("marketLevelId", props.marketLevelId.toString())

    return props.basepath + url + params.toString()
})

const fetchSalesComps = async () => {
    isLoading.value = true
    salesCompsData.value = []
    error.value = undefined
    const data = await fetch(path.value, {
        headers: {
            Authorization: `Bearer ${props.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    isLoading.value = false;
    const jsonData = await data.json();

    if (!data.ok) {
        error.value = jsonData
        console.error(jsonData)
        return;
    }

    salesCompsData.value = jsonData;
}
</script>

<template>
    <button class="btn" type="button" @click="fetchSalesComps">Get Sales Comps Data</button>
    <div v-if="isLoading">
        <span>Loading...</span>
    </div>
    <div v-else-if="!isLoading && error">
        <div>There was an error</div>
        <span>{{error}}</span>
    </div>
    <div v-else>{{salesCompsData}}</div>
</template>

<style>
@import "../output.css";
</style>
