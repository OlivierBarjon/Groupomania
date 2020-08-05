<template>
  <b-form @submit="onSubmit" v-if="show">
    <h2 align="left">Suppression de votre compte :</h2>
    <p
      align="left"
      class="my-4"
    >Vous pouvez supprimer votre compte via le formulaire ci-dessous. Tous les gifs ainsi que leurs commentaires seront également supprimés de la base de donnée de Groupomania. Cette action est irréversible.</p>
    <b-form-group
      id="input-group-1"
      label="Saisissez votre Email :"
      label-for="input-1"
      label-cols-sm="auto"
    >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Validez votre email"
        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-2"
      label="Saisissez votre mot de passe :"
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

    <p class="form__message-red">{{messageErreur}}</p>
    <p class="form__message">{{message}}</p>
    <b-button class="button" type="submit" variant="danger">Supprimer définitivement mon compte</b-button>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userId: JSON.parse(localStorage.getItem("userId")),
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
      request.open("DELETE", "http://localhost:3000/api/auth/deleteUser");
      request.setRequestHeader("Content-Type", "application/json");
      request.setRequestHeader(
        "Authorization",
        "Bearer " + JSON.parse(localStorage.getItem("token"))
      );
      new Promise((resolve, reject) => {
        request.onreadystatechange = function () {
          if (this.readyState == XMLHttpRequest.DONE && this.status >= 200 && this.status <= 300) {
            resolve(this.responseText);
          }
          if (this.status > 399) {
            reject();
          }
        };
      })
        .then(() => {
          this.message =
            "Votre compte à été correctement supprimé. Vous allez être redirigé vers la page d'accueil dans quelques instants";
          localStorage.clear();
          setTimeout(function () {
            document.location.href = "/";
          }, 3000);
        })
        .catch(() => {
          this.messageErreur =
            "Un problème est survenu durant la tentative de suppression de ce compte. Merci de recommencer plus tard.";
        });
      request.send(JSON.stringify(this.form));
    },
  },
};
</script>
