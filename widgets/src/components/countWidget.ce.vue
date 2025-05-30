<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <button class="btn" type="button" @click="count++">count is {{ count }}</button>
</template>

<style scoped>
@import "../output.css";
</style>
