import { Movie } from "./../../models/movie";
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  HostBinding,
  ViewEncapsulation
} from "@angular/core";

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
  constructor() {}

  ngOnInit(): void {}
}
