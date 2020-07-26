<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>
          <router-link to="/">
            <img alt="logo" src="./assets/logo-groupomania-light.png" />
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="localStorage.length>1">
              <router-link to="/new-article">Poster un article</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/about">À propos</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>Utilisateur</template>
              <b-dropdown-item>
                <button v-if="localStorage.length>1" v-on:click="deconnect">Se déconnecter</button>
                <router-link v-else to="/signin">Se connecter</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link v-if="localStorage.length<=1" to="/signup">S'inscrire</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <!-- router-view -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      localStorage
    }
  },
  methods: {
    deconnect() {
      localStorage.clear();
      window.history.go(0)
    }
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

#nav {
  padding: 30px;

  a {
    font-weight: lighter;
    /* color: #ffffff; */

    &.router-link-exact-active {
      color: #ffffff;
      /*background-color: aqua; */
    }
  }
}
</style>
