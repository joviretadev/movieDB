<template>
    <div id="example">
        <h2 class="mx-3 grey--text">Upcoming Movies</h2>
        <carousel-3d
        :controls-visible="true"
        clikeable="false"
        :key="upcomingMovies.length"
        :listData="upcomingMovies"
        :height="500"
        >
            <slide :index="i" :key="i" v-for="(movie, i) in this.upcomingMovies">
                <figure>
                    <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
                </figure>
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d';
export default {
    data(){
        return {
            upcomingMovies: [],
        };
    },
    mounted() {
        this.ftechUpcomingMovies();
    },
    methods: {
        async ftechUpcomingMovies(){
            const key = 'api_key=e6335b17cdde8e59b1f6a95982df5ef3';
            const response = await this.$http.get(
                "https://api.themoviedb.org/3/movie/upcoming?"+(key)
            );
            this.upcomingMovies = response.data.results.slice(0,7);
            console.log(this.upcomingMovies);
        }
    }
}
</script>