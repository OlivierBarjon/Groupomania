<template>
  <b-form @submit="onSubmit" v-if="show">


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
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userId: JSON.parse(localStorage.getItem('userId')),
        selection: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const request = new XMLHttpRequest();
      const id = window.location.pathname.split("article/")[1];
      const body = {
        userId : this.form.userId,
        selection : this.form.selection,
      };
      request.open("PUT", `http://localhost:3000/api/article/select/${id}`);
      request.setRequestHeader('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('token')));
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
                console.log(response);
              })
              .catch(() => {
                console.log("erreur");;
              });
      /////////////////////
      request.send(JSON.stringify(body));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  margin: 1rem;
}
</style>
