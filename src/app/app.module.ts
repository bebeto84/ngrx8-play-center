import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { metaReducers, rootReducer } from "./reducers";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { MockHttpCalIInterceptor } from "./mock-http.interceptor";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./app.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot(rootReducer, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    BrowserAnimationsModule,
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockHttpCalIInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
