<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group
      id="input-group-1"
      label="Title:"
      label-for="input-1"
      label-cols-sm="auto"
    >
      <b-form-input
        id="input-1"
        v-model="form.title"
        type="text"
        required
        placeholder="Titre de l'article"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Votre texte :" label-for="input-2" label-cols-sm="auto">
      <b-form-input
        id="input-2"
        v-model="form.text"
        type="text"
        required
        placeholder="Votre article"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Mot de passe :" label-for="input-3" label-cols-sm="auto">
      <b-form-input
        id="input-3"
        v-model="form.password"
        type="password"
        required
        placeholder="Votre mot de passe"
      ></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="dark">Envoyer</b-button>
    <b-button type="reset" variant="danger">Effacer</b-button>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        text: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const request = new XMLHttpRequest();
      request.open("POST", "http://localhost:3000/api/auth/signup");
      request.setRequestHeader("Content-Type", "application/json");
      request.send(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.email = "";
      this.form.password = "";
      this.form.isAdmin = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
