import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservationform',
  templateUrl: './reservationform.component.html',
  styleUrl: './reservationform.component.css'
})
export class ReservationformComponent implements OnInit {
  reservationForm : FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private rooter: Router,
    private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['',Validators.required],
      checkOutDate: ['',Validators.required],
      guestName: ['',Validators.required],
      guestEmail: ['',[Validators.required, Validators.email]],
      roomNumber: ['',Validators.required]
    })
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      this.reservationService.getReservation(id).subscribe(reservation => {
        if(reservation){
          this.reservationForm.patchValue(reservation);
        }
      })
    }
  }
  onSubmit(){
    if(this.reservationForm.valid){
      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id')
      if(id){
        this.reservationService.updateReservation(id,reservation).subscribe(()=> {
          console.log("Update request processed")
        })
      }else {
        this.reservationService.addReservation(reservation).subscribe(()=> {
          console.log("Add request processed")
        });
      }
      this.rooter.navigate(['/list'])
    }
  }
}
