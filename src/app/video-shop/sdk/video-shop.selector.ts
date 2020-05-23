import { State } from "../../reducers/index";
import { getVideoShopState } from "./video-shop.reducer";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { VideoShopState } from "./state";
import { Movie } from 'src/app/models/movie';

export const selectVideoShopMovies = createSelector(
  getVideoShopState,
  (state: VideoShopState) => state.movies
);

export const selectVideoShopKeptMovies = createSelector(
  getVideoShopState,
  (state: VideoShopState) => state.keptMovies
);

export const selectVideoShopKeptMovie = createSelector(
  getVideoShopState,
  (state: VideoShopState, movie: Movie) => state.keptMovies.includes(movie)
);
