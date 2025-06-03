<script setup lang="ts">
import {register} from "./main";
import {token} from './token'

const basepath = 'https://my.dev.greenstreetapps.com/'
register()
</script>

<template>
<!--    <count-foobar/>-->
<!--    <api-foobar .text="'hello'"/>-->
    <sales-comps-table/>
<!--    <foobar-testing :token.prop="token"-->
<!--                  :basepath.prop="basepath" .region="'USA'" .sectorId="11" .marketLevelId="1" .marketId="150" :withGrades.prop="true"></foobar-testing>-->
</template>

<style scoped></style>
