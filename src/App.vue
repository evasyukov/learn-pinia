<template>
  <div class="app">
    <div class="header">
      <img class="header-logo" src="" alt="" />
      <h2>My Favorite Movies</h2>
    </div>

    <div class="tabs">
      <button
        class="btn"
        :class="{ btn__green: movieStore.activeTab === 1 }"
        @click="movieStore.setActiveTab(1)"
      >
        Favorite
      </button>
      <button
        class="btn"
        :class="{ btn__green: movieStore.activeTab === 0 }"
        @click="movieStore.setActiveTab(0)"
      >
        Search
      </button>
    </div>

    <div class="movies" v-if="movieStore.activeTab === 1">
      <div>
        <h3>Movies</h3>
        <Movie
          v-for="movie of movieStore.watchedMovies"
          :key="movie.id"
          :movie="movie"
        />
      </div>

      <h3>All Movies</h3>
      <Movie
        v-for="movie of movieStore.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>

    <div class="search" v-else>Search</div>
  </div>
</template>

<script setup>
import { useMovieStore } from "./stores/MovieStore"
import Movie from "./components/Movie.vue"

const movieStore = useMovieStore()
</script>

<style lang="scss">
.app {
  max-width: 600px;
  margin: auto;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &-logo {
    max-width: 50px;
    margin-right: 10px;
  }
}

.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;

  &:hover {
    opacity: 0.7;
  }

  &__green {
    background: #37df5c;
  }
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
