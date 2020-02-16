import { Observable } from "rxjs";

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  HostBinding
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import { loadMovies } from "../actions/video-shop.actions";
import { Movie } from "../models/movie";
import { filter } from "rxjs/operators";
import { VideoShopState } from "./state";
import { selectVideoShopMovies } from "./video-shop.selector";

@Component({
  selector: "app-video-shop",
  templateUrl: "./video-shop.component.html",
  styleUrls: ["./video-shop.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class VideoShopComponent implements OnInit {
  @HostBinding("class.video-shop") hostClass = true;

  movies$: Observable<Movie[]>;
  movies: Movie[] = [];

  constructor(private store: Store<VideoShopState>) {}

  ngOnInit(): void {
    this.movies$ = this.store.pipe(select(selectVideoShopMovies));

    this.store.dispatch(loadMovies());
  }
}
