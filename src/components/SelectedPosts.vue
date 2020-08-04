<template>
  <b-row>
    <b-col>
      <h2>{{ titre }}</h2>
        <b-card :key="item.id" v-for="item in listePosts" no-body class="overflow-hidden my-3">
              <b-row no-gutters>
                <b-col md="6">
                  <a v-bind:href="'article/' + item.id"><b-card-img :src="item.file"  class="rounded-0 card__img"></b-card-img></a>
                </b-col>
                <b-col md="6">
                  <b-card-body title-tag="h3" :title="item.title">
                    <b-card-text align="left"><span class="commentaire__Titre">Commentaire de l'auteur :</span> <br />{{item.text}}</b-card-text>
                    <p align="right" class="mt-5"><a v-bind:href="'article/' + item.id"> Plus de détails >></a></p>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SelectedPosts",
  props: {
    titre: String,
    },
  

  data() {
    return {
      listePosts : [],
    }
  },

  async mounted()  {
        const headers = new Headers ();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization",
      "Bearer " + JSON.parse(localStorage.getItem("token")));
      const reqParams = {method:"GET", headers};
         const apiResponse = await fetch("http://localhost:3000/api/article/selection", reqParams);//helpers ????????????
         console.log(apiResponse);
         const result = await apiResponse.json();
         console.log(result);
         this.listePosts=result;
  }
  


}
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
