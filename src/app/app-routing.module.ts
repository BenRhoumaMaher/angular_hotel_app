import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationlistComponent } from './reservationlist/reservationlist.component';
import { ReservationformComponent } from './reservationform/reservationform.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"list", component: ReservationlistComponent},
  {path:"new", component: ReservationformComponent},
  {path:"edit/:id", component: ReservationformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
