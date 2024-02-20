import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationformComponent } from '../reservationform/reservationform.component';
import { ReservationlistComponent } from '../reservationlist/reservationlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    ReservationformComponent,
    ReservationlistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule
  ]
})
export class ReservationModule { }
