import { Movie } from "../../models/movie";

export const videoShopFeatureKey = "videoShop";

export interface VideoShopState {
  movies: Movie[];
  keptMovies: Movie[];
}

export const initialState: VideoShopState = {
  movies: [],
  keptMovies: []
};
