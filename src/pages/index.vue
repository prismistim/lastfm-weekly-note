<script setup lang="ts">
import {v4 as uuidv4 } from 'uuid'
const uuid = uuidv4()
</script>

<template>
<a :href="`https://misskey.io/miauth/${uuid}?name=lastfmWeeklyNote&callback=https%3A%2F%2Flocalhost%3A5173%2Fcallback&permission=read:account,write:notes`">連携</a>
</template>