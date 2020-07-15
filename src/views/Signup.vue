<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-groupomania.png">
    <Information msg="Page d'inscription"/>
    <SignupForm @inscription="setInscription" />
  </div>
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
      console.log(payload.username);
    }
  },

  
  
}
</script>
