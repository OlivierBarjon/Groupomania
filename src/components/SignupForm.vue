<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group
      id="input-group-1"
      label="Email:"
      label-for="input-1"
      description="Nous ne partagerons votre adresse mail avec personne."
      label-cols-sm="auto"
    >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Votre Email"
        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Pseudo :" label-for="input-2" label-cols-sm="auto">
      <b-form-input
        id="input-2"
        v-model="form.username"
        type="text"
        required
        placeholder="Votre nom d'utilisateur ou votre pseudo"
        pattern="[A-Za-z0-1éè]{2,}"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-3"
      label="Mot de passe :"
      label-for="input-3"
      description="4 caractères minimum (chiffres et lettres uniquement)"
      label-cols-sm="auto"
    >
      <b-form-input
        id="input-3"
        v-model="form.password"
        type="password"
        required
        placeholder="Votre mot de passe"
        pattern="[A-Za-z0-9]{4,}"
      ></b-form-input>
    </b-form-group>
    <p class="form__message">{{message}}</p>
    <b-button class="button" type="submit" variant="dark">Inscription</b-button>
    <b-button class="button-reset" type="reset" variant="danger" size="sm">Effacer</b-button>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        username: "",
        password: "",
      },
      show: true,
      message: "",
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const request = new XMLHttpRequest();
      request.open("POST", "http://localhost:3000/api/auth/signup");
      request.setRequestHeader("Content-Type", "application/json");
      new Promise((resolve, reject) => {
        request.onreadystatechange = function () {
          if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
            resolve(this.responseText);
          }
          if (this.status > 399) {
            reject();
          }
        };
      })
        .then((result) => {
          const response = JSON.parse(result);
          console.log(response); //TEST
          this.message =
            "Votre compte a été correctement crée. Vous allez être redirigé vers la page de connexion. Merci de vous y connecter une première fois...";
          setTimeout(function () {
            document.location.href = "/signin";
          }, 5000); // bascule automatique vers la page de connexion pour optin
        })
        .catch(() => {
          console.log("erreur d'enregistrement d'un nouvel utilisateur");
        });
      request.send(JSON.stringify(this.form));
    },

    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.email = "";
      this.form.password = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
