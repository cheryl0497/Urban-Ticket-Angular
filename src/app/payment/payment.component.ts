import { Component, OnInit ,VERSION} from '@angular/core';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2'; 

@Component({
  
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  title = 'QRcodes';
  name = 'Angular' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = ' https://gpay.app.goo.gl/pay-eDokMKkqmzc';
  constructor() { }

  ngOnInit(): void {
  }
}
