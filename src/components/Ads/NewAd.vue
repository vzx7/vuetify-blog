<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--seccondary mb-3">Create new ad</h1>
        <v-form v-model="valid" ref="form" validation>
          <v-text-field
            v-model="title"
            label="Ad title"
            name="title"
            type="text"
            :rules="[ v => !!v || 'Title is required']"
          />

          <v-textarea
            v-model="description"
            label="Ad discription"
            name="description"
            multi-line
            :rules="[ v => !!v || 'Desctription is required']"
          />

          <v-layout row wrap>
            <v-flex xs12>
              <v-btn
                :loading="loading"
                :disabled="loading"
                color="blue-grey"
                class="ma-2 white--text warning"
                @click="loader = 'loading'"
              >
                Upload
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="mt-3">
            <img height="150" src="https://bipbap.ru/wp-content/uploads/2017/04/2-16.jpg" alt />
          </v-layout>
          <v-layout row wrap>
            <v-switch v-model="promo" :label="'Ad to promo'" color="primary"></v-switch>
          </v-layout>
          <v-layout row wrap>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="createAd" :disabled="!valid">Create ad</v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      title: "",
      promo: false,
      description: "",
      valid: false
    };
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        };
        console.log(ad)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>