<script setup lang="ts" >
import { ref } from 'vue'

const step = ref()
</script>

<template>
  <v-app>
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
                      color="secondary"
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
                      color="secondary"
                      label="Password"
                      type="password"
                    ></v-text-field>
                    <v-text-field
                      color="secondary"
                      label="Confirm Password"
                      type="password"
                      clearable
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
                  color="secondary"
                  variant="text"
                  @click="step--"
                >
                  Back
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  v-if="step < 3"
                  color="secondary"
                  variant="text"
                  @click="step++"
                >
                  Next
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
        <v-btn
          class="signup_google"
          color="secondary"
          variant="tonal"
          rounded="sm"
          width="500"
        >
          Sign Up with Google
        </v-btn>

        <v-btn
          class="signup_google"
          color="secondary"
          variant="tonal"
          rounded="sm"
          width="500"
        >
          Sign Up with Apple
        </v-btn>
        
        <v-btn
          class="signup_google"
          color="secondary"
          variant="tonal"
          rounded="sm"
          width="500"
        >
          Sign Up with Amazon
        </v-btn>
    </div>
  </v-app>
</template>

<style scoped>
.form_container{
  margin: 10%;
  display: grid;
  place-self: center;
  align-self: center;
}
.signup_google{
  margin: 2%;
  place-self: center;
}

</style>