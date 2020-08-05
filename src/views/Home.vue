<template>
  <b-container fluid="sm">

    <b-row align-v="center">
      <b-col>
        <TitrePage v-if="localStorage.length>1" msg="Groupomania Gifs" />
        <TitrePage v-else msg="Bienvenue chez Groupomania" />
        <p>Votre réseau social de partage de Gifs animés</p>
        </b-col>
    </b-row>

    <b-row align-v="center" >
      <b-col>
        <LastPosts class="my-5" v-if="localStorage.length>1" titre="LES DERNIERS GIFS" />
        <SelectedPosts class="my-3" v-if="localStorage.length>1" titre="LES MEILLEURS GIFS" />

        <!-- hors connexion -->
        <div class="connectHP" v-else> 
          <h2>Vous devez-être connecté pour visualiser ce contenu.<br /> Connectez-vous : </h2>
          <SigninForm />
          <p> Si vous ne possédez pas de compte, rendez-vous à la <a href="/signup" >rubrique inscription >></a> </p>
        </div>
        <!-- FIN zone hors connexion -->

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import TitrePage from "@/components/TitrePage.vue";
import LastPosts from "@/components/LastPosts.vue";
import SelectedPosts from "@/components/SelectedPosts.vue"
import SigninForm from"@/components/SigninForm.vue";

export default {
  name: "Home",
  data() {
    return {
      localStorage,
    };
  },
  components: {
    TitrePage,
    LastPosts,
    SelectedPosts,
    SigninForm
  },
};
</script>



<style scoped lang="scss"> // "scoped" attribute to limit CSS to this component only
.connectHP {
  margin-top: 2rem;
  padding : 1rem;
  background-color: rgb(243, 243, 245);
   h2 {
     font-size: 1.75rem;
     line-height: 1.75rem;
   }
   p {
     font-style:italic;
   }
   a {
     color: black;
     font-weight: bolder;
   }
}
</style>