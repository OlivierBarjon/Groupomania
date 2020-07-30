<template>
  <b-container fluid-lg>
    <b-row align-v="center">
      <b-col>
        <TitrePage :msg= "article.title" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-left mx-2">

        <b-card no-body class="overflow-hidden my-4">
      <b-row no-gutters>
        <b-col md="auto">
          <b-card-img :src="article.file"  class="rounded-0 card__img"></b-card-img>
        </b-col>
        <b-col md="auto">
          <b-card-body>
            <b-card-text align="left">{{article.text}}<br />
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

      </b-col>
    </b-row>
    <b-row align-v="center">

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
    console.log(this.article);//TEST
  },

};
</script>
<style scoped lang="scss">
</style>
