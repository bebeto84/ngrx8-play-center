import { MaterialModule } from "./../material.module";
import { MovieComponent } from "./movie/movie.component";
import { EffectsModule } from "@ngrx/effects";
import { VideoShopComponent } from "./video-shop.component";
import { StoreModule } from "@ngrx/store";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { routes } from "./video-shop.routes";

import * as fromVideoShop from "./sdk/video-shop.reducer";
import { VideoShopEffects } from "./sdk/video-shop.effects";
import { videoShopFeatureKey } from "./sdk/state";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(videoShopFeatureKey, fromVideoShop.videoShopReducer),
    EffectsModule.forFeature([VideoShopEffects])
  ],
  declarations: [VideoShopComponent, MovieComponent]
})
export class VideoShopModule {}
