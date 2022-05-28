<template>
  
</template>

<script>
import Dashboard from "@/components/Dashboard.vue"
import axios from "axios";
export default {
    components: { Dashboard },
    data: function(){
        return {
            movies: [],
            genres: [],
        };
    },
    async mounted() {
        try{
            const key = 'api_key=e6335b17cdde8e59b1f6a95982df5ef3';
            const response =  await this.$http.get("/trending/movie/day?"+(key));
            this.movies = response.data.results;
            console.log(this.movies)
        }catch(error){
            console.log(error);
        }

    },
      created() {
        const key = 'api_key=e6335b17cdde8e59b1f6a95982df5ef3';
        axios.get("https://api.themoviedb.org/3/trending/movie/week?"+(key)).then((result2) => {
        this.result2 = result2.data;
        console.log(this.result)
    })
  }
}
</script>