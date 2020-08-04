<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col><TitrePage msg="Inscrivez-vous" /></b-col>
    </b-row>
    <b-row align-v="center">
      <b-col><SignupForm @inscription="setInscription" /></b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import TitrePage from '@/components/TitrePage.vue'
import SignupForm from '@/components/SignupForm.vue'

export default {
  name: 'Signup',
  components: {
    TitrePage,
    SignupForm
  },
  methods: {
    setInscription(payload) {
      alert(payload.username);
    }
  },
}

</script>
