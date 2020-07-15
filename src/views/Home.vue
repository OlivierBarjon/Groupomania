<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-groupomania.png">
    <Information msg="Bienvenue chez Grouporama"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Information from '@/components/Information.vue'

export default {
  name: 'Home',
  components: {
    Information
  }
}
</script>
