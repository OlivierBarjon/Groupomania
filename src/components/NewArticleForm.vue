<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group id="input-group-1" label="Titre :" label-for="input-1" label-cols-sm="auto">
      <b-form-input
        id="input-1"
        v-model="form.title"
        type="text"
        required
        placeholder="Titre de l'article"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Commentaire :" label-for="input-2" label-cols-sm="auto">
      <b-form-textarea
        id="input-2"
        v-model="form.text"
        type="text"
        required
        placeholder="Votre texte ici"
        rows ="4"
        max-rows="10"
      ></b-form-textarea>
    </b-form-group>

<b-form-group id="input-group-3" label="Ajouter une image :" label-for="input-3" labels-cols-sm="auto" label-size="sm">
  <b-form-file
      v-model="form.file"
      :state="Boolean(file)"
      type="file"
      placeholder="Choisissez une image au format .jpg ou .png... max 5Mo"
      drop-placeholder="Drop file here..."
      accept=".jpg, .jpeg, .png, .gif"
      size="sm"
      required
    ></b-form-file>
    <div v-if="form.file" class="mt-2">Fichier sélectionné : {{ form.file ? form.file.name : ''}}</div>
</b-form-group>
    <p class="form__message-red">{{messageErreur}}</p>
    <p class="form__message">{{message}}</p>
    <b-button class="button" type="submit" variant="dark">Envoyer</b-button>
    <b-button class="button-reset" size="sm" type="reset" variant="danger" >Effacer</b-button>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userId: JSON.parse(localStorage.getItem('userId')),
        title: "",
        text: "",
        file: null
      },
      show: true,
      message:"",
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const request = new XMLHttpRequest();
      const body = new FormData();
      const image = this.form.file //message perso : pas de Blob !!
      const article = {
        userId : this.form.userId,
        title : this.form.title,
        text : this.form.text
      };
      body.append("article" , JSON.stringify(article));
      body.append("image", image);
      //console.log(this.form.file); //TEST
      request.open("POST", "http://localhost:3000/api/article/");
      //request.setRequestHeader("Content-Type", "multipart/form-data") // message perso : Le forcage  des headers produits des erreurs
      request.setRequestHeader('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('token')));
      /////////////////////
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
              .then(() => {
                this.message =
                  "Votre image Gif et son commentaire sont enregistrés. Vous allez être redirigé vers la page d'accueil dans quelques instants";
                setTimeout(function () {
                  document.location.href = "/";
                }, 3000);
              })
              .catch(() => {
                this.messageErreur = "Un problème est survenu durant l'envoi de votre message. Merci de recommencer plus tard.";
              });
      /////////////////////
      request.send(body);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.title = "";
      this.form.text = "";
      this.form.file = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  margin: 1rem;
}
.button-reset {
  margin-top: 0.4rem;
}
.form__message {
  font-style: bold;
  color: rgb(3, 143, 3);
  &-red {
    color: rgb(255,4,4);
  }
}
</style>
