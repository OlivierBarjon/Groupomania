<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col><Information msg="Page de connexion" /></b-col>
    </b-row>
    <b-row align-v="center">
      <b-col><SignupForm @inscription="setInscription" /></b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Information from '@/components/Information.vue'
import SignupForm from '@/components/SignupForm.vue'

export default {
  name: 'Signup',
  components: {
    Information,
    SignupForm
  },
  methods: {
    setInscription(payload) {
      console.log(payload.username);///////////////////// REQUETE ??
    }
  },

  
  
}
</script>
