<template>
  <b-col>
    <!-- b-card -->
    <b-card :key="item.id" v-for="item in pageOfItems" no-body class="overflow-hidden my-4">
      <b-row no-gutters>
        <b-col md="6">
          <a v-bind:href="'article/' + item.id">
            <b-card-img :src="item.file" class="rounded-0 card__img" :alt="item.title"></b-card-img>
          </a>
        </b-col>
        <b-col md="6">
          <b-card-body title-tag="h2" :title="item.title">
            <b-card-text align="left">
              <p>
                <span class="commentaire__Titre">Commentaire de {{item.User.username}} :</span>
                <br />
                {{item.text}}
              </p>
              <p class="card__auteur">Posté par {{item.User.username}}</p>
              <p align="right" class="mt-5">
                <a v-bind:href="'article/' + item.id">Plus de détails >></a>
              </p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <!-- FIN b-card -->

    <!-- pagination -->
    <div class="mb-3">
      <jw-pagination
        :items="listePosts"
        @changePage="onChangePage"
        :pageSize="5"
        :labels="customLabels"
      ></jw-pagination>
    </div>
    <!-- FIN pagination -->
  </b-col>
</template>

<script>
/* Personnalisation de la pagination */
const customLabels = {
  first: "<<",
  last: ">>",
  previous: "<",
  next: ">",
};

export default {
  name: "AllPosts",

  data() {
    return {
      listePosts: [],
      pageOfItems: [],
      customLabels,
    };
  },

  methods: {
    onChangePage(pageOfItems) {
      // update page of items (pagination)
      this.pageOfItems = pageOfItems;
    },
  },

  async mounted() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(
      "Authorization",
      "Bearer " + JSON.parse(localStorage.getItem("token"))
    );
    const reqParams = { method: "GET", headers };
    const apiResponse = await fetch(
      "http://localhost:3000/api/article",
      reqParams
    );
    const result = await apiResponse.json();
    this.listePosts = result;
  },
};
</script>