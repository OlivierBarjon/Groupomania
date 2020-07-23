<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col><Information msg="Postez un nouvel article" /></b-col>
    </b-row>
    <b-row align-v="center">
      <b-col><NewArticleForm @inscription="setInscription" /></b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Information from '@/components/Information.vue'
import NewArticleForm from '@/components/NewArticleForm.vue'

export default {
  name: 'NewArticle',
  components: {
    Information,
    NewArticleForm
  },
  methods: {
    setInscription(payload) {
      alert(payload.username);
    }
  },
}
</script>
