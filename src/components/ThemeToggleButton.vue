<script setup lang="ts" >
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>

<template>
    <v-btn 
        icon="flare"
        variant="text" 
        @click="toggleTheme"
        color="blue"
    >
    </v-btn>
</template>

<style scoped>
</style>