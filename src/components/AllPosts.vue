<template>

  <b-col>
    <!-- b-card -->
    <b-card :key="item.id" v-for="item in pageOfItems" no-body class="overflow-hidden my-4">
      <b-row no-gutters>
        <b-col md="6">
          <a v-bind:href="'article/' + item.id"><b-card-img :src="item.file"  class="rounded-0 card__img"></b-card-img></a>
        </b-col>
        <b-col md="6">
          <b-card-body title-tag="h2" :title="item.title">
            <b-card-text align="left">
              <p><span class="commentaire__Titre">Commentaire de l'auteur :</span> <br />{{item.text}}</p>
              <p align="right" class="mt-5"><a v-bind:href="'article/' + item.id"> Plus de détails >></a></p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <!-- FIN b-card -->

    <!-- pagination -->
    <div class="mb-3">
            <jw-pagination :items="listePosts" @changePage="onChangePage" :pageSize="5" :labels="customLabels"></jw-pagination>
    </div>
    <!-- FIN pagination -->
  </b-col>

</template>

<script>

const customLabels = {
  first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
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
            // update page of items
            this.pageOfItems = pageOfItems;
        }
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
    ); //helpers ???????????
    const result = await apiResponse.json();
    this.listePosts = result;

  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card__img {
  max-height: 20rem;
  max-width: 20rem;
}

.commentaire__Titre {
  font-weight: bolder;
}

a {
  font-weight: bolder;
  color:black;
}
</style>
