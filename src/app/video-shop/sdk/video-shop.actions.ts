import { Movie } from "../../models/movie";
import { createAction, props } from "@ngrx/store";

export const loadMovies = createAction("[Video Shop] Load Movies");
export const loadMoviesSuccess = createAction(
  "[Video Shop] Load Movies Success",
  props<{ movies: Movie[] }>()
);
export const keepMovie = createAction(
  "[Video Shop] Keep Movie",
  (movie: Movie)=> ({movie})
);
export const removeMovie = createAction(
  "[Video Shop] Remove Movie",
  props<{ movie: Movie }>()
);
