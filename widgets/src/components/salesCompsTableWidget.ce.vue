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
    {title: "Sale Date", key: 'dateSale'},
    {title: "Price", key: 'priceConfirmed'},
    {title: "Buyer", key: 'entityBuyer'},
    {title: "Seller", key: 'entitySeller'},
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

    <div class="bg-white p-4 shadow-2xl rounded-2xl">
        <div class=" grid grid-cols-5 border-solid border-2 border-gray-100 rounded divide-y-1 divide-gray-200">
            <div v-for="header in headers"
                 class="bg-gray-100 border-b border-solid border-b-gray-300 px-4 text-lg font-semibold text-slate-700"
                 :class="{'text-right': header.key === 'priceConfirmed'}">
                {{ header.title }}
            </div>
            <div v-for="item in salesCompsData" class="col-span-5 grid grid-cols-5 py-2 odd:bg-gray-100">
                <div v-for="header in headers" class="px-4" :class="{'text-right': header.key === 'priceConfirmed'}">
                    {{item[header.key] ?? '-'}}
                </div>
            </div>
            <div class="col-span-5 text-center py-2" v-if="isLoading">
                <p>Loading...</p>
            </div>
            <div class="col-span-5 text-center py-2" v-else-if="!isLoading && error">
                <div>There was an error!</div>
                <div>{{error}}</div>
            </div>
        </div>
    </div>
</template>

<style>
@import "../output.css";
</style>
