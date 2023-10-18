<script setup>
import NavDraw from '../components/NavDraw.vue';
import ProductCard from '../components/ProductCard.vue';
import SearchBar from '../components/SearchBar.vue';
import ThemeToggleButton from '../components/ThemeToggleButton.vue';
</script>

<template>
      <v-layout>
        <NavDraw></NavDraw>
        <v-main>
          <v-container>
            <router-view></router-view>   
          </v-container>
        </v-main>
      </v-layout>
</template>

<style scoped>

</style>