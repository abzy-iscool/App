<script setup lang="ts">
import { ref } from 'vue'
import amazonAuthButton from '../components/AmanzonAuthButton.vue'
import googleAuthButton from '../components/GoogleAuthButton.vue'
import appleAuthButton from '../components/AppleAuthButton.vue'

const step = ref()
</script>

<template>
    <div class="form_container">
    <v-container>
        <v-row no-gutters>
          <v-col order="6" >
            <v-card
              density="comfortable"
              width="500"
              max-width="500"
              variant="text"
            >
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-card-title>
                    <v-icon icon="person"/>
                    Sign Up
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      clearable
                      clear-icon="close"
                      label="Email"
                      placeholder="john@gmail.com"
                    ></v-text-field>
                    <span class="text-caption text-grey-darken-1">
                      This is the email you will use to login to your sorted account
                    </span>
                  </v-card-text>
                </v-window-item>

                <v-window-item :value="2">
                  <v-card-title>
                    <v-icon icon="lock"/>  
                    Create a Password
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      clearable
                      clear-icon="close"
                      label="Password"
                      type="password"
                    ></v-text-field>
                    <v-text-field
                      clearable
                      clear-icon="close"
                      label="Confirm Password"
                      type="password"
                    ></v-text-field>
                    <span class="text-caption text-grey-darken-1">
                      Please enter a password for your account
                    </span>
                  </v-card-text>
                </v-window-item>

                <v-window-item :value="3">
                  <div class="pa-4 text-center">
                    <v-img
                      class="mb-4"
                      contain
                      height="128"
                      src="logo.png"
                    ></v-img>
                    <h3 class="text-h6 font-weight-light mb-2">
                      Welcome to Sorted
                    </h3>
                    <span class="text-caption text-grey" >Thanks for signing up!</span>
                  </div>
                </v-window-item>
              </v-window>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn
                  v-if="step > 1"
                  variant="text"
                  @click="step--"
                  color="blue"
                >
                  Back
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  v-if="step < 3"
                  variant="text"
                  @click="step++"
                  color="blue"
                >
                  Next
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
        <googleAuthButton></googleAuthButton>
        <amazonAuthButton></amazonAuthButton>
        <appleAuthButton></appleAuthButton>
    </div>
</template>

<style scoped>

.form_container{
  margin: 8%;
  display: grid;
  place-self: center;
  align-self: center;
}

</style>