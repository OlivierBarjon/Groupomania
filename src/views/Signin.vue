<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-groupomania.png">
    <Information msg="Page de connexion"/>
    <SigninForm />
  </div>
</template>

<script>
// @ is an alias to /src
import Information from '@/components/Information.vue'
import SigninForm from '@/components/SigninForm'

export default {
  name: 'Signin',
  components: {
    Information,
    SigninForm
  }
}
</script>
