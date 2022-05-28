<template>
  <nav>
    <v-app-bar app color="green" dark>
      <v-toolbar-title>MovieDB</v-toolbar-title>
      <v-btn text class="ml-2" to="/">Movies</v-btn>
      <v-btn text class="ml-2" to="/upcoming">Upcoming</v-btn>
      <v-btn text class="ml-2" to="/dashboard">Dashboard</v-btn>

    <v-spacer></v-spacer>
    <v-autocomplete
      clearable
      hide-no-data
      hide-selected
      color="white"
      label="search"
      prepend-inner-icon="search"
      flat
      :items="movies"
      item-text="title"
      item-value="id"
      id="search"
    >
      <template v-slot:item="{item}">
        <v-btn text :to="`/movie/${item.id}`">{{ item.title }}</v-btn>
      </template>
    </v-autocomplete>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data:()=>({
    drawer: null,
    model: '',
    search: null,
    movies: []
  }),
  mounted(){
    this.loadMovies();
  }, 
  methods: {
    loadMovies: async function(){
      try{
        const key = 'api_key=e6335b17cdde8e59b1f6a95982df5ef3';
            const response =  await this.$http.get("/movie/popular?"+(key));
            this.movies = response.data.results;
      }catch(error){
        console.log(error);
      }
    }
  }
}
</script>
