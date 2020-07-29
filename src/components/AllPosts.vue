<template>
  <b-col>
    <b-card
      :key="item.id"
      v-for="item in listePosts"
      no-body
      class="overflow-hidden my-4"
    >
      <b-row no-gutters>
        <b-col md="auto">
          <b-card-img :src="item.file" class="rounded-0 card__img"></b-card-img>
        </b-col>
        <b-col md="auto">
          <b-card-body title-tag="h2" :title="item.title">
            <b-card-text align="left">{{item.text}}</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "AllPosts",

  data() {
    return {
      listePosts: [],
    };
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
    //console.log(result); // TEST
    this.listePosts = result;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card__img {
  max-height: 20rem;
  max-width: 20rem;;
}
</style>
