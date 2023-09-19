<script setup>
import NavDraw from '../components/NavDraw.vue';
import ProductCard from '../components/ProductCard.vue';
import SearchBar from '../components/SearchBar.vue';

</script>

<template>
    <v-card>
      <v-layout>
        <NavDraw></NavDraw>
        <v-main >
           <SearchBar></SearchBar>
          <ProductCard></ProductCard>
        </v-main>
      </v-layout>
    </v-card>
  </template>