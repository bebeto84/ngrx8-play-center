import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "../models/movie";

@Injectable({ providedIn: "root" })
export class VideoService {
  videoUrl = "/videos";
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.videoUrl);
  }
}
