import { State } from "./../reducers/index";
import { getVideoShopState } from "./video-shop.reducer";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { VideoShopState } from "./state";

export const selectVideoShopMovies = createSelector(
  getVideoShopState,
  (state: VideoShopState) => state.movies
);
