<template>
  <div class="container">
    <v-card
      class="mx-auto"
      max-width="400"
      variant="flat"
    >
      <v-img
        class="align-end text-white"
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>

      <v-card-subtitle class="pt-4">
        Number 10
      </v-card-subtitle>

      <v-card-text>
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="blue" rounded="xs" variant="tonal" >
          Inquire
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.container{
  margin: 5%;
}

</style>