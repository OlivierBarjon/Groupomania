<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col>
        <TitrePage msg="À propos de ce site" />
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col>
        <p align="left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import TitrePage from "@/components/TitrePage.vue";

export default {
  name: "About",
  components: {
    TitrePage,
  },
};

</script>