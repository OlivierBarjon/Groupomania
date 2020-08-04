<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col><TitrePage msg="Postez un nouveau Gif animé" /></b-col>
    </b-row>
    <b-row align-v="center">
      <b-col><NewArticleForm /></b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import TitrePage from '@/components/TitrePage.vue'
import NewArticleForm from '@/components/NewArticleForm.vue'

export default {
  name: 'NewArticle',
  components: {
    TitrePage,
    NewArticleForm
  },
  /* methods: {///@inscription="setInscription" ///// A SUPPRIMER APRES TESTS
    setInscription(payload) {
      alert(payload.username);
    }
  }, */
}
</script>
