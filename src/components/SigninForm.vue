<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col></b-col>
      <b-col>
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label="Email :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Votre adresse Email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Mot de passe :" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Votre mot de passe"
          ></b-form-input>
        </b-form-group>

        <p></p>
        <b-button type="submit" variant="dark">Connexion</b-button>
      </b-form>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Signin-form",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
