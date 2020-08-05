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
/* BLOC PRINCIPAL */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* MENU PRINCIPAL */

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


/* CARD */

.card__img {
  max-height: 20rem;
  max-width: 20rem;
}

.commentaire__Titre {
  font-weight: bolder;
}

.card__auteur {
  font-style: italic;
}

/* ELEMENTS DE FORMULAIRES */

.form__message {
  font-style: bold;
  color: rgb(3, 143, 3);
  &-red {
    color: rgb(255, 4, 4);
  }
}

.button {
  margin: 1rem;
  &-reset {
    margin-top: 0.4rem;
  }
}


/* STYLES GENERIQUES */

a {
  font-weight: bolder;
  color:black;
  &:focus {
    color : grey;
  }
}
</style>
