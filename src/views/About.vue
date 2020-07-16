<template>
  <b-container fluid="sm">
    <b-row align-v="center">
      <b-col><Information msg="À propos de ce site" /></b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Information from '@/components/Information.vue'

export default {
  name: 'About',
  components: {
    Information
  }
}
</script>