import { Movie } from "../../models/movie";
import * as VideoShopActions from "./video-shop.actions";
import { createReducer, on, createFeatureSelector } from "@ngrx/store";
import { initialState, VideoShopState, videoShopFeatureKey } from "./state";

export const videoShopReducer = createReducer(
  initialState,
  on(VideoShopActions.loadMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies: [...movies]
  })),
  on(VideoShopActions.keepMovie, (state, { movie }) => ({
    ...state,
    keptMovies: [...state.keptMovies, movie]
  })),
  on(VideoShopActions.removeMovie, (state, { movie }) => ({
    ...state,
    keptMovies: state.keptMovies.filter(keptMovie => keptMovie !== movie)
  }))
);

export const getVideoShopState = createFeatureSelector<VideoShopState>(
  videoShopFeatureKey
);
