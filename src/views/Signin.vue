<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col><Information msg="Page de connexion" /></b-col>
    </b-row>
    <b-row align-v="center">
      <b-col><SigninForm /></b-col>
    </b-row>
  </b-container>
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
