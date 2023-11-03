<template>
    <div id="news-list">
      <h1>Lista de Noticias</h1>
      <ul v-if="newsList.length > 0">
        <li v-for="news in newsList" :key="news.id">
          <p><router-link :to="'/news/' + news.id">{{ news.title }}</router-link></p>
        </li>
      </ul>
      <p v-else>Cargando...</p>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        newsList: [] 
      };
    },
    created() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          this.newsList = data;
        });
    }
  };
</script>

<style>
body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F1F0E8;
}

h1{
    font-size: 2.5rem;
}

#news-list{
    border-radius: 20px;

}

ul {
    list-style: none;
    
}

li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:#EEE0C9;
    margin: 10px 0px;
    padding: 8px 20px;
    border-radius: 20px;
}
li a {
    text-decoration: none;
    font-size: 1.2rem;
    color: black;
}

</style>
  