<template>
  <div class="movie">
    <img
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
      class="movie-img"
    />
    <div>
      <div class="movie-name">
        {{ movie.original_title }} ({{ movie.release_date }})
      </div>
      <span class="movie-overview">{{ movie.overview }}</span>
      <div class="movie-buttons">
        <button
          class="btn movie-buttons-watched"
          @click="movieStore.isWatchedMovie(movie.id)"
        >
          <div v-if="!movie.isWatched">Watched</div>
          <div v-else>Unwatched</div>
        </button>
        <button class="btn movie-buttons-delete" @click="movieStore.deleteMovie(movie.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useMovieStore} from "../stores/MovieStore"

const movieStore = useMovieStore()

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
})

</script>

<style lang="scss" scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;

  &-accept {
    margin-right: 10px;
  }

  &-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }
  &-name {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  &-overview {
    display: block;
    margin-bottom: 20px;
  }
  &-buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    &-watched {
      color: #fff;
      background: #1eb4c3;

      &__icon {
        width: 15px;
        margin-left: 10px;
      }
    }

    &-delete {
      color: #fff;
      background: #ff2a2a;
    }
  }
}
</style>
