import { Injectable, Injector } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import * as movieData from "./../assets/movies/data.json";

const VIDEOS_URL = "/videos";

@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url === VIDEOS_URL) {
      console.log("Loaded from JSON: " + request.url);
      return of(
        new HttpResponse({ status: 200, body: (movieData as any).default })
      );
    }
    return next.handle(request);
  }
}
