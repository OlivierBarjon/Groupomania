<template>
  <b-container fluid-lg>
    <b-row align-v="center">
      <b-col>
        <TitrePage msg="Tous vos Gifs" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-left mx-2">
        <p>Lorem Ipsuetting industry.Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </b-col>
    </b-row>
    <b-row align-v="center">
        <AllPosts />
    </b-row>
  </b-container>
</template>

<script>
import TitrePage from "@/components/TitrePage.vue";
import AllPosts from "@/components/AllPosts.vue";


export default {
  name: "AllArticles",
  components: {
    TitrePage,
    AllPosts
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
