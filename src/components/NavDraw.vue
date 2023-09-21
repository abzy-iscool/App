<script setup lang="ts">


</script> 

<template>
<v-navigation-drawer
          expand-on-hover
          rail
          rounded
        >
          <v-list>
            <v-list-item
              prepend-avatar="logo.png"
              title="Sandra Adams"
              subtitle="sandra_a88@gmail.com"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list nav variant="flat" mandatory active-color="error">
            <v-list-item lines="one" subtitle="Find Your Next Place" prepend-icon="home" title="Home" value="home" ></v-list-item>
            <v-list-item lines="one" subtitle="Discover New Abodes" prepend-icon="explore" title="Explore" value="explore"></v-list-item>
            <v-list-item lines="one" subtitle="Saved Listings" prepend-icon="bookmarks" title="Saved" value="saved"></v-list-item>
            <v-list-item lines="one" prepend-icon="settings" title="Settings" value="settings"></v-list-item>
          </v-list>
        </v-navigation-drawer>
</template>

<style scoped>


</style>