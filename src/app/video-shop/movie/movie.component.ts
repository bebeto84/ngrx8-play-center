import { Movie } from "./../../models/movie";
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  HostBinding,
  ViewEncapsulation
} from "@angular/core";
import { Store, select } from '@ngrx/store';
import { VideoShopState } from '../sdk/state';
import { selectVideoShopKeptMovie } from '../sdk/video-shop.selector';
import { Observable } from 'rxjs';
import { keepMovie } from '../sdk/video-shop.actions';

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MovieComponent implements OnInit {
  @HostBinding("class.video-shop-movie") hostClass = true;

  @Input() movie: Movie;

  isFreeToBorrow$: Observable<boolean>;
  constructor(private store: Store<VideoShopState>) {}

  ngOnInit(): void {
    this.isFreeToBorrow$ = this.store.pipe(select(selectVideoShopKeptMovie));
  }

  borrowOrLeaveMovie() {
    this.store.dispatch(keepMovie(this.movie));
  }
}
