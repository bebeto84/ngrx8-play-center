import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  declarations: [],
  imports: [...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES]
})
export class MaterialModule {}
