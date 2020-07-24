<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group
      id="input-group-1"
      label="Email:"
      label-for="input-1"
      description="Nous ne partagerons votre adresse mail avec personne.."
      label-cols-sm="auto"
    >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Votre Email"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Pseudo :" label-for="input-2" label-cols-sm="auto">
      <b-form-input
        id="input-2"
        v-model="form.username"
        type="text"
        required
        placeholder="Votre nom d'utilisateur ou votre pseudo"
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

    <!-- <b-form-group id="input-group-4" label="" label-for="input-4">
      <b-form-checkbox
        id="input-4"
        v-model="form.isAdmin"
        value="true"
        unchecked-value="false"
      >Cochez la case ci-contre si vous souhaitez être modérateur</b-form-checkbox>
    </b-form-group> -->

    <b-button type="submit" variant="dark">Inscription</b-button>
    <b-button type="reset" variant="danger">Effacer</b-button>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        username: "",
        password: ""/* ,
        isAdmin: false */
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
      //this.form.isAdmin = "";
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
