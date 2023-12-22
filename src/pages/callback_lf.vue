<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import md5 from 'md5'

const route = useRoute()
const token = ref('')

const key = '43165b4581c89c2eb4e2d41be4b41611'


const setToken = () => {
  if (!route.query || !route.query.token || typeof route.query.token !== 'string' ) {
    return
  }

  token.value = route.query.token
}

const generateSignature = () => {
  return md5(`api_key`)
}

const fetchWeeklyTracks = async () => {
  if (token.value === '') {
    return
  }

  const res = await fetch(`https://www.last.fm/api/2.0/?method=user.getweeklytrackchart&user=Prismist-M&api_key=${key}&format=json`)

  c(await res.json()))
}

setToken()
</script>