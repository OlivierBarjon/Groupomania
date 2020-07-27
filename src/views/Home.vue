<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col><TitrePage msg="Bienvenue chez Groupomania" /></b-col>
    </b-row>
    <b-row align-v="center">
      <b-col><p>Votre réseau social de partage de Gifs animés</p></b-col>
    </b-row>
    <b-row align-v="center">
      <b-col><LastPosts titre="Les derniers Gifs" /></b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import TitrePage from "@/components/TitrePage.vue";
import LastPosts from "@/components/LastPosts.vue"

export default {
  name: "Home",
  components: {
    TitrePage,
    LastPosts
  },
};
</script>
