import { loadMoviesSuccess, keepMovie } from "./video-shop.actions";
import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { loadMovies } from "./video-shop.actions";
import { mergeMap, map, observeOn } from "rxjs/operators";
import { VideoService } from "../video.service";
import { asyncScheduler } from "rxjs";

@Injectable()
export class VideoShopEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      observeOn(asyncScheduler),
      mergeMap(() =>
        this.moviesService.getAll().pipe(
          map(movies => loadMoviesSuccess({ movies }))
        )
      )
    )
  );

/*   borrowMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(keepMovie),

  ); */

  constructor(private actions$: Actions, private moviesService: VideoService) {}
}
