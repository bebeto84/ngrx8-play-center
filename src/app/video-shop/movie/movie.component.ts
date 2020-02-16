import { Movie } from "./../../models/movie";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  constructor() {}

  ngOnInit(): void {}
}
