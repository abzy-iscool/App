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
              prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVsi_rJGAs4nh5yel1L8ASSVD0wPigGg7VLMOlIp7RQ&s"
              title="Sandra Adams"
              subtitle="sandra_a88@gmail.com"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list nav variant="flat" mandatory color="blue">
            <v-list-item @click="$router.push('/dash/home')" lines="one" subtitle="Find Your Next Place" prepend-icon="home" title="Home" value="home" ></v-list-item>

            <v-list-item @click="$router.push('/dash/discover')" lines="one" subtitle="Discover New Abodes" prepend-icon="explore" title="Discover" value="discover"></v-list-item>

            <v-list-item @click="$router.push('/dash/saved')" lines="one" subtitle="Saved Listings" prepend-icon="bookmarks" title="Saved" value="saved"></v-list-item>

            <v-list-item @click="$router.push('/dash/settings')" prepend-icon="settings" title="Settings" value="settings"></v-list-item>
          </v-list>
        </v-navigation-drawer>
</template>

<style scoped>


</style>