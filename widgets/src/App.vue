<script setup lang="ts">
import {register} from "./main";
import CountWidget from '@/components/countWidget.ce.vue'
register()
</script>

<template>
  <count-foobar />
  <CountWidget></CountWidget>
</template>

<style scoped></style>
