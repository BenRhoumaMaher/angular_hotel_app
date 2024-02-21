import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];
  private apiUrl = "http://localhost:3001"

  constructor(private http: HttpClient){}

  //CRUD

  //GetAllReservations
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  }

  //GetOneReservation
  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + "/reservation/"+id);
  }

  //CreateReservation
  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.apiUrl + "/reservation/",reservation);
  }

  //deleteReservation
  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservation/"+id);
  }

  //updateReservation
  updateReservation(id: string,reservation: Reservation): Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservation/"+id,reservation);
  }

}


