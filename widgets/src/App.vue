<script setup lang="ts">
import {register} from "./main";
import {token} from './token'

const basepath = 'https://my.dev.greenstreetapps.com/'
register()
</script>

<template>
    <sales-comps-table :token.prop="token"
                       :basepath.prop="basepath" .region="'USA'" .sectorId="'11'" .marketLevelId="'1'" .marketId="'150'" :withGrades.prop="true"/>
</template>

<style scoped></style>
