<template>
  <div id="blocForm">
    <p>Vos coordonnées :</p>

    <form id="form">
      <div>
        <div>
          <label for="username">Pseudo :</label>
          <input
            type="text"
            name="username"
            id="username"
            v-model="username"
            pattern="[A-Za-z- é]{2,}"
            required
          />
          <!-- regEx :Lettres tirets espaces "é" uniquement, 2 caractères minimum-->
        </div>

        <div>
          <label for="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="email"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
          <!-- regEx : commence par au moins un chiffre, lettre, point, underscore, modulo, plus, moins ; suivi d'un arobase ; suivi d'au moins une lettre, un chiffre, un point, un tiret suivi d'un point suivi (et pour finir) d'au moins 2 lettres-->
        </div>

        <div>
          <label for="password">Mot de passe :</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            pattern="[A-Za-z0-9]{2,}"
            required
          />
          <!-- regEx : chiffre ou lettre, au minimum 2 -->
        </div>

        <div>
          <label for="isAdmin">Cochez la case si vous souhaitez-vous être modérateur:</label>
          <input type="checkbox" name="isAdmin" value="true" id="isAdmin" v-model="isAdmin" />
        </div>

        <div>
          <button type="submit" id="submitBtn" @click="signupEvent">S'inscrire</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {

  name: "Signup-form",

  data() {
        return {
          username: "",
          email: "",
          password: "",
          isAdmin: "false"
        }
      },

  methods: {
    signupEvent() {
      this.$emit("inscription", {
        username: "dd", //this.username,
        email: "dd", //this.email,
        password: "dd", //this.password,
        isAdmin: false //this.isAdmin
      });
    }, 
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
