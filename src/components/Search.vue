<template>
  <form class="search" @submit.prevent="">
    <input
      class="search-input"
      type="text"
      placeholder="Search movie"
      v-model="searchMovie"
    />
    <!-- <button class="btn" @click="movieStore.getMovies()">Search</button> -->
  </form>
</template>

<script setup>
import { ref } from "vue"
import { useMovieStore } from "../stores/MovieStore"

const movieStore = useMovieStore()
const searchMovie = ref("")
</script>

<style lang="scss" scoped>
.search {
  &-input {
    width: 100%;
    height: 40px;

    margin-bottom: 10px;
    padding: 0 10px;

    border: 1px solid #e7e7e7;
    border-radius: 10px;

    &:focus {
      outline: none;
    }
  }
}
</style>
