<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
const uuid = uuidv4()

const key = '43165b4581c89c2eb4e2d41be4b41611'
</script>

<template>
  <a :href="`https://misskey.io/miauth/${uuid}?name=lastfmWeeklyNote&callback=https%3A%2F%2Flocalhost%3A5173%2Fcallback&permission=read:account,write:notes`">連携</a>
  <a :href="`https://www.last.fm/api/auth/?api_key=${key}&cb=https%3A%2F%2Flocalhost%3A5173%2Fcallback_lf`">last.fm 連携</a>
</template>
