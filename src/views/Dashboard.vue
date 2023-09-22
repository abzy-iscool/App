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
            <v-row justify="center">
              <SearchBar></SearchBar>
              <ThemeToggleButton></ThemeToggleButton>
            </v-row>
          </v-container>
          <ProductCard></ProductCard>
        </v-main>
      </v-layout>
</template>

<style scoped>

</style>