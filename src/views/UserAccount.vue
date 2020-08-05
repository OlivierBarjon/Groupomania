<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col>
        <TitrePage msg="Votre compte utilisateur" />
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col>
        <DeleteUserForm />
      </b-col>
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

/* ##### PROJET EVOLUTION ###### */
  /* data () {
    return {
      listePosts: []
    }
  },

  async mounted() { 
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(
      "Authorization",
      "Bearer " + JSON.parse(localStorage.getItem("token"))
    );
    const userId = JSON.parse(localStorage.getItem("userId"));
    const reqParams = { method: "GET", headers };
    const apiResponse = await fetch(
      `http://localhost:3000/api/auth/getOneUser/${userId}`,
      reqParams
    );
    const result = await apiResponse.json();
    this.listePosts = result;
  }, */

};
</script>