<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col>
        <TitrePage msg="Votre compte utilisateur" />
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col>
        <p>Depuis cette page, vous pouvez supprimer votre compte (tous les gifs ainsi que leurs commentaires seront également supprimés de la base de donnée de Groupomania</p>
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col><DeleteUserForm /></b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import TitrePage from "@/components/TitrePage.vue";
import DeleteUserForm from '@/components/DeleteUserForm.vue'

export default {
  name: "UserAccount",
  components: {
    TitrePage,
    DeleteUserForm
  },
};
</script>