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

    <b-form-group id="input-group-2" label="Votre texte :" label-for="input-2" label-cols-sm="auto">
      <b-form-textarea
        id="input-2"
        v-model="form.text"
        type="text"
        required
        placeholder="Votre texte ici"
        rows ="8"
        max-rows="20"
      ></b-form-textarea>
    </b-form-group>

<b-form-group id="input-group-3" label="Ajouter une image :" label-for="input-3" labels-cols-sm="auto" label-size="sm">
  <b-form-file
      v-model="form.file"
      :state="Boolean(file)"
      placeholder="Choisissez une image au format .jpg ou .png..."
      drop-placeholder="Drop file here..."
      accept=".jpg, .jpeg, .png, .gif"
      size="sm"
    ></b-form-file>
    <div v-if="form.file" class="mt-2">Fichier sélectionné : {{ form.file ? form.file.name : ''}}</div>
</b-form-group>
 

    <b-button type="submit" variant="outline-dark">Envoyer</b-button>
    <b-button type="reset" variant="outline-danger" >Effacer</b-button>
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
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const request = new XMLHttpRequest();
      request.open("POST", "http://localhost:3000/api/article/");
      request.setRequestHeader("Content-Type", "application/json");
      request.setRequestHeader('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('token')));
      request.send(JSON.stringify(this.form));
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

</style>
