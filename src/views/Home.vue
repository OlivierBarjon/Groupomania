<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col><Information msg="Bienvenue chez Grouporama" /></b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Information from "@/components/Information.vue";

export default {
  name: "Home",
  components: {
    Information
  }
};
</script>
