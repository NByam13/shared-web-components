<script setup lang="ts">
import {computed,  ref} from "vue";
import type {SalesCompsTransaction, TableProps} from "@/components/salesComps";

type ColumnDefinition = {
    title: string
    key: keyof SalesCompsTransaction
}

const url = 'api/market_data/markets/150/sales_comps'
const props = defineProps<TableProps>()

const salesCompsData = ref<SalesCompsTransaction[]>()
const isLoading = ref<boolean>(false)
const error = ref<string>()
const path = computed(() => {
    const params = new URLSearchParams()
    params.set("marketId", props.marketId)
    params.set("region", props.region)
    params.set("withGrades", props.withGrades ? '1' : '0')
    params.set("marketLevelId", props.marketLevelId)
    params.set("sectorId", props.sectorId)
    console.log(params.toString())

    return props.basepath + url + '?' + params.toString()
})

const headers = ref<ColumnDefinition[]>([
    {title: "Property", key: 'property'},
    {title: "Buyer", key: 'entityBuyer'},
    {title: "Seller", key: 'entitySeller'},
    {title: "Sale Date", key: 'dateSale'},
    {title: "Price", key: 'priceConfirmed'},
])

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

    salesCompsData.value = jsonData.data;
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
    <div class="grid grid-cols-5" >
        <div v-for="header in headers">{{ header.title }}</div>
        <div v-for="item in salesCompsData" class="col-span-5 grid grid-cols-5">
            <div v-for="header in headers">
                {{item[header.key]}}
            </div>
        </div>
    </div>
</template>

<style>
@import "../output.css";
</style>
