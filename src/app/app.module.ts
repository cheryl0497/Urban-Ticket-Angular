import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeatComponent } from './seat/seat.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BoardAdminComponent,
    BoardManagerComponent,
    BoardUserComponent,
    UserDetailsComponent,
    ManagerDetailsComponent,
    MovieDetailsComponent,
    MoviePageComponent,
    SeatComponent,
    CreateMovieComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxQRCodeModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,

    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [SeatComponent]
})
export class AppModule { }
