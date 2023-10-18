<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue'
import SearchBar from '../components/SearchBar.vue';
import ThemeToggleButton from '../components/ThemeToggleButton.vue';
</script>

<template>
        <v-app>
            <v-container>
              <v-row justify="center">
                <SearchBar></SearchBar>
                <ThemeToggleButton></ThemeToggleButton>
              </v-row>
            </v-container>
            <v-container>
              <v-row no-gutters >
                <v-col
                  v-for="n in 3"
                  :key="n"
                  cols="12"
                  sm="4"
                >
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </v-col>
              </v-row>
            </v-container>
        </v-app>
</template>