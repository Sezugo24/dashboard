import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonasComponent } from './pages/donas/donas.component';
import { DonasHttpComponent } from './pages/donas-http/donas-http.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonasComponent,
    DonasHttpComponent,
    MenuComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
