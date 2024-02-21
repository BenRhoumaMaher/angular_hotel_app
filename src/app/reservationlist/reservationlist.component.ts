import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservationlist',
  templateUrl: './reservationlist.component.html',
  styleUrl: './reservationlist.component.css'
})
export class ReservationlistComponent implements OnInit {
  reservations: Reservation[] = [];
  constructor(private reservationService: ReservationService){}
  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
  }
  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("Delete request got processed.")
    })
  }
}
