<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const token = ref('')

const sessionCheck = async () => {
  if (!route.query || !route.query.session) {
    return
  }

  const res = await fetch(`https://misskey.io/api/miauth/${route.query.session}/check`, {
    method: 'POST'
  })

  token.value = (await res.json()).token
}

const postText = async () => {
  const res = await fetch(`https://misskey.io/api/notes/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      i: token.value,
      text: 'api karano post test'
    })
  })

  console.log(await res.json())
}

sessionCheck()
</script>

<template>
  <button @click="postText()">toukou</button>
</template>