<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TitrePage',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss"> // "scoped" attribute to limit CSS to this component only
h1 {
  margin: 1.5rem;
}
</style>
