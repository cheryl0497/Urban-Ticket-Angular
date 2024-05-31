import { Component, OnInit,VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2'; 
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreate():void{
    this.dialog.open(PaymentComponent);
  }
  
}
