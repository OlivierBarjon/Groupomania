<template>
  <div id="LastPosts">
    <h2>{{ titre }}</h2>
    <div :key="item.id" v-for="item in listePosts">
      <h3>{{item.title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastPosts",
  props: {
    titre: String,
    },
  

  data() {
    return {
      listePosts : [],
    }
  },

  async mounted()  {
        const headers = new Headers ();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization",
      "Bearer " + JSON.parse(localStorage.getItem("token")));
      const reqParams = {method:"GET", headers};
         const apiResponse = await fetch("http://localhost:3000/api/article/home", reqParams);//helpers
         console.log(apiResponse);
         const result = await apiResponse.json();
         console.log(result);
         this.listePosts=result;
  }
  
  /////////////////////////////////////////////////////////////////

  /* beforeMount() {
    const appContainer = document.getElementById("LasPosts");
    const request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/api/article/home");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader(
      "Authorization",
      "Bearer " + JSON.parse(localStorage.getItem("token"))
    );
    new Promise((resolve, reject) => {
      request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
          resolve(this.responseText);
        }
        if (this.status > 399) {
          reject();
        }
      };
    })
      .then((result) => {
        const response = JSON.parse(result);
        console.log(response);
        console.log(appContainer);
        const articleListContainer = document.createElement("div");
        for (let item of response){
          const articleContainer = document.createElement("div");
          articleContainer.innerHTML = `<div><h3>${item.title}</h3></div>`;
          articleListContainer.appendChild(articleContainer);
        }
        appContainer.appendChild(articleListContainer);

      })
      .catch(() => {
        console.log("chargement des posts impossible");
      });
    request.send();
    
  }, */

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
