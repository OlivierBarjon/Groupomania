<template>
  <b-container fluid-lg>
    <b-row align-v="center">
      <b-col>
        <TitrePage :msg="article.title" />
      </b-col>
    </b-row>

    <b-row>
      <b-col class="text-left mx-2">
        <!-- Card -->
        <b-card no-body class="overflow-hidden my-4">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                :src="article.file"
                class="rounded-0 card__img"
                img-left
                :alt="article.title"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text align="left">
                  <span class="commentaire__Titre">Commentaire de l'auteur :</span>
                  <br />
                  {{article.text}}
                  <div align="right" class="mt-5">
                    <p class="card__auteur">Posté par : {{article.User.username}}</p>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <!-- FIN Card -->
      </b-col>
    </b-row>

    <b-row align-v="center" v-if="moderateur === 'true'">
      <b-col class="text-left mx-2">
        <!-- Bouton selection modérateur -->
        <p class="form__message">{{message}}</p>
        <b-form @submit="onSubmit">
          <b-form-group label="ZONE MODÉRATEUR :">
            <b-form-radio
              v-if="article.selection === false"
              v-model="form.selected"
              name="Selectionner"
              value="true"
            >Sélectionner</b-form-radio>
            <b-form-radio
              v-if="article.selection === true"
              v-model="form.selected"
              name="Deselectionner"
              value="false"
            >Déselectionner</b-form-radio>
            <b-button type="submit" size="sm" class="my-2">Valider</b-button>
          </b-form-group>
        </b-form>
        <!-- FIN bouton selection modérateur -->
      </b-col>
    </b-row>
  </b-container>
</template>



<script>
import TitrePage from "@/components/TitrePage.vue";

export default {
  name: "Article",

  components: {
    TitrePage,
  },

  data() {
    return {
      article: {},
      form: {
        userId: JSON.parse(localStorage.getItem("userId")),
        selected: "",
      },
      message: "",
      moderateur: localStorage.isAdmin,
    };
  },

  async mounted() {
    const id = window.location.pathname.split("article/")[1];
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(
      "Authorization",
      "Bearer " + JSON.parse(localStorage.getItem("token"))
    );
    const reqParams = { method: "GET", headers };
    const apiResponse = await fetch(
      `http://localhost:3000/api/article/${id}`,
      reqParams
    );
    const result = await apiResponse.json();
    this.article = result;
  },

  methods: {
    // Selection modérateur
    onSubmit(evt) {
      evt.preventDefault();
      const request = new XMLHttpRequest();
      const id = window.location.pathname.split("article/")[1];
      const body = {
        userId: this.form.userId,
        selection: this.form.selected,
      };
      request.open("PUT", `http://localhost:3000/api/article/select/${id}`);
      request.setRequestHeader(
        "Authorization",
        "Bearer " + JSON.parse(localStorage.getItem("token"))
      );
      request.setRequestHeader("Content-Type", "application/json");
      new Promise((resolve, reject) => {
        request.onreadystatechange = function () {
          if (this.readyState == XMLHttpRequest.DONE && this.status >= 200) {
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
          this.message = "Modification de la sélection effectuée";
          setTimeout(function () {
            history.go(0);
          }, 1000);
        })
        .catch(() => {
          console.log("erreur modification sélection impossible");
        });
      request.send(JSON.stringify(body));
    },
  },
};
</script>

