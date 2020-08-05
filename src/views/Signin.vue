<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col><TitrePage msg="Connectez-vous" /></b-col>
    </b-row>
    <b-row align-v="center">
      <b-col><SigninForm /></b-col>
    </b-row>
  </b-container> 
</template>

<script>
// @ is an alias to /src
import TitrePage from '@/components/TitrePage.vue'
import SigninForm from '@/components/SigninForm'

export default {
  name: 'Signin',
  components: {
    TitrePage,
    SigninForm
  }
}
</script>
