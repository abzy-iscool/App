<script setup lang="ts">


</script> 

<template>
<v-navigation-drawer
          expand-on-hover
          rail
        >
          <v-list>
            <v-list-item
              prepend-avatar="logo.png"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list nav variant="flat" mandatory active-color="secondary">
            <v-list-item lines="one" subtitle="" prepend-icon="home" title="Home" value="home" ></v-list-item>
            <v-list-item lines="one" subtitle="" prepend-icon="explore" title="Discover" value="discover"></v-list-item>
            <v-list-item lines="one" subtitle="" prepend-icon="bookmarks" title="Saved" value="saved"></v-list-item>
            <v-list-item lines="one" prepend-icon="settings" title="Settings" value="settings"></v-list-item>
          </v-list>
        </v-navigation-drawer>
</template>

<style scoped>


</style>