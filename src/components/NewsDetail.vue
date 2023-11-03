<template>
    <div id="detail" v-if="news">
      <h1>{{ news.title }}</h1>
      <p>{{ news.body }}</p>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        news: null
      };
    },
    created() {
      const newsId = this.$route.params.id;
      fetch(`https://jsonplaceholder.typicode.com/posts/${newsId}`)
        .then(response => response.json())
        .then(data => {
          this.news = data;
        });
    }
  };
  </script>

<style>
#detail {
    margin: 3% 10%;
    padding: 5%;
    background-color: #EEE0C9;
    border-radius: 10px;
    height: 60vh;
}

</style>