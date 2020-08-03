<template>
  <b-col>

<!-- b-card -->
    <b-card :key="item.id" v-for="item in pageOfItems" no-body class="overflow-hidden my-4">
      <b-row no-gutters>
        <b-col md="auto">
          <b-card-img :src="item.file"  class="rounded-0 card__img"></b-card-img>
        </b-col>
        <b-col md="auto">
          <b-card-body title-tag="h2" :title="item.title">
            <b-card-text align="left">{{item.text}}<br />
            <a v-bind:href="'article/' + item.id"> Voir en détail >></a>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <div class="mb-3">
            <jw-pagination :items="listePosts" @changePage="onChangePage" :pageSize="5" :labels="customLabels"></jw-pagination>
    </div>


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
    ); //helpers
    //console.log(apiResponse); // TEST
    const result = await apiResponse.json();
    console.log(result); // TEST
    this.listePosts = result;
   // this.itemsCount = result.count; // uniquement dans le cadre d'un "findAndCountAll"
    //console.log(this.listePosts);
    //console.log(this.itemsCount);
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card__img {
  max-height: 20rem;
  max-width: 20rem;
}
</style>
