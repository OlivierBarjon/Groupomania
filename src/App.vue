<template>

  <b-container fluid id="app">

    <!-- NAV BAR -->
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
              <router-link to="/new-article">Poster un nouveau Gif</router-link>
            </b-nav-item>
            <b-nav-item v-if="localStorage.length>1">
              <router-link to="/all-articles">Voir tous les Gifs</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/about">À propos</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content class="nav-dropdown">Utilisateur</template>
              <b-dropdown-item class="dropdown">
                <router-link v-if="localStorage.length>1" to="/user-account">Mon compte</router-link>
                </b-dropdown-item>
                <b-dropdown-item class="dropdown">
                <b-button v-if="localStorage.length>1" v-on:click="deconnect">Se déconnecter</b-button>
                <router-link v-else to="/signin">Se connecter</router-link>
              </b-dropdown-item>
              <b-dropdown-item class="dropdown">
                <router-link v-if="localStorage.length<=1" to="/signup">S'inscrire</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>

      </b-navbar>
    </div>
    <!-- FIN NAV BAR -->

    <!-- router-view -->
    <router-view />
    <!-- FIN router-view -->

    <div class="footer m-3"><p>Une création Connect-E - 2020 | <a href="#" >mentions légales </a>| <a href="#">contactez-nous</a></p></div>

  </b-container>

</template>

<script>
export default {
  data() {
    return {
      localStorage,
    };
  },
  methods: {
    deconnect() { // user logout
      localStorage.clear();
      document.location.href = "/";
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding-top: 1.5rem;

  a {
    font-weight: lighter;
    color: #ffffff;
    &:focus {
      color: grey;
    }
    &:hover {
      background-color: #343a40;
    }
  }
 
  ul {
    background-color: #343a40;
  }
  .dropdown-menu {
    border: 3px solid #ffc107;
    border-radius: 0.25rem;
  }
}

.footer a {
  font-weight:bold;
  color : #000;
  &:focus {
    color : grey;
  }

}

</style>
