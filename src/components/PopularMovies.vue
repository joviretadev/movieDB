<template>
  <div class="mx-3">
      <h2 class="mt-2 grey--text">Popular Movies</h2>
      <v-container fluid>
          <v-row>
                <v-col cols="12" sm="3"
                v-for="movie in movies" :key="movie.id"
                >
                    <MovieCard :movie="movie" :genres="genres"/>
                </v-col>
            </v-row>
      </v-container>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue' 
export default {
    components: {
    MovieCard,
},
    data: function(){
        return {
            movies: [],
            genres: [],
        };
    },
    async mounted() {
        this.ftechGenres();
        try{
            const key = 'api_key=e6335b17cdde8e59b1f6a95982df5ef3';
            const response =  await this.$http.get("/movie/popular?"+(key));
            this.movies = response.data.results;
        }catch(error){
            console.log(error);
        }
    },
    methods: {
        async ftechGenres() {
            try{
                const key = 'api_key=e6335b17cdde8e59b1f6a95982df5ef3';
                const response = await this.$http.get("/genre/movie/list?"+(key));
                this.genres = response.data.genres;
            }catch(error){
                console.log(error);
            }  
        }
    },

}
</script>