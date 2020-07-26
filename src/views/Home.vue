<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col><TitrePage msg="Bienvenue chez Groupomania" /></b-col>
    </b-row>
    <b-row align-v="center">
      <b-col><p>Votre réseau social</p></b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import TitrePage from "@/components/TitrePage.vue";

export default {
  name: "Home",
  components: {
    TitrePage
  }
};
</script>
