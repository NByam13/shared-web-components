<script setup lang="ts">
import {ref} from "vue";

interface User {
    id: number;
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
    },
    geo: {
        lat: string
        lng: string
        phone: string
        website: string
    },
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

const users = ref<User[]>()
const error = ref<string>()
const getData = async () => {
    error.value = undefined

    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json()

    if (!data.ok) {
        error.value = "Some went wrong to retrieve data";
        console.error(json)
        return;
    }

    users.value = json
}
</script>

<template>
    <button class="btn" type="button" @click="getData">Get some Data!</button>
    <div v-for="user in users" :key="user.id">
        <div>{{ user.name }}</div>
        <div>{{ user.username }}</div>
        <div>{{ user.email }}</div>
    </div>
</template>

<style>
@import '../output.css';
</style>
