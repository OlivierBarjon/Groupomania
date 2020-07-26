<template>
  <b-form @submit="onSubmit" v-if="show">
    <b-form-group id="input-group-1" label="Email :" label-for="input-1" label-cols-sm="auto">
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Votre adresse Email"
        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-2"
      label="Mot de passe :"
      label-for="input-2"
      label-cols-sm="auto"
    >
      <b-form-input
        id="input-2"
        v-model="form.password"
        type="password"
        required
        placeholder="Votre mot de passe"
      ></b-form-input>
    </b-form-group>
    <p class="form__message">{{message}}</p>
    <p class="form__message-red">{{messageErreur}}</p>
    <p></p>
    <b-button class="button" type="submit" variant="dark">Connexion</b-button>
  </b-form>
</template>

<script>
export default {
  name: "Signin-form",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
      message: "",
      messageErreur: "",
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const request = new XMLHttpRequest();
      request.open("POST", "http://localhost:3000/api/auth/signin");
      request.setRequestHeader("Content-Type", "application/json");
      new Promise((resolve, reject) => {
        request.onreadystatechange = function () {
          if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            resolve(this.responseText);
          }
          if (this.status > 399) {
            reject();
          }
        };
      })
        .then((result) => {
          const response = JSON.parse(result);
          localStorage.setItem("userId", JSON.stringify(response.userId));
          localStorage.setItem("token", JSON.stringify(response.token));
          this.message =
            "Connexion réussie, vous allez être redirigé automatiquement vers la page d'accueil";
          setTimeout(function () {
            document.location.href = "/";
          }, 3000);
        })
        .catch(() => {
          console.log("compte utilisateur introuvable");
          this.messageErreur = "Email ou/et mot de passe incorrect(s)";
        });
      request.send(JSON.stringify(this.form));
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form__message {
  font-style: bold;
  color: rgb(3, 143, 3);
  &-red {
    color: rgb(255, 4, 4);
  }
}
.button {
  margin: 1rem;
}
</style>
