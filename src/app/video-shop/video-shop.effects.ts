import { loadMoviesSuccess } from "./../actions/video-shop.actions";
import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { loadMovies } from "../actions/video-shop.actions";
import { mergeMap, map, observeOn } from "rxjs/operators";
import { VideoService } from "./video.service";
import { asyncScheduler } from "rxjs";

@Injectable()
export class VideoShopEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      observeOn(asyncScheduler),
      mergeMap(() =>
        this.moviesService.getAll().pipe(
          /*  map(movies => ({
            type: "[Movies API] Movies Loaded Success",
            payload: movies
          })) */
          map(movies => loadMoviesSuccess({ movies }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private moviesService: VideoService) {}
}
