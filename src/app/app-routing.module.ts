import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "library",
    loadChildren: () =>
      import("./library/library.module").then(m => m.LibraryModule)
  },
  {
    path: "video-shop",
    loadChildren: () =>
      import("./video-shop/video-shop.module").then(m => m.VideoShopModule)
  },
  {
    path: "gaming",
    loadChildren: () =>
      import("./gaming/gaming.module").then(m => m.GamingModule)
  },
  {
    path: "",
    redirectTo: "library",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
