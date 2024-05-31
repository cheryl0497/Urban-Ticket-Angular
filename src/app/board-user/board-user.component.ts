import { Observable } from 'rxjs';
import { AdminService } from './../_services/admin.service';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

const IMG_PATH = '../../assets/image/';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  movies : any;
  content: string;

  constructor(private adminService: AdminService ,private userService:UserService ) {
    
  }

  ngOnInit(): void {
    this.getMovies();
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data; 
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  private getMovies(){
    this.adminService.getMoviesList().subscribe(data =>{
      this.movies = data;
      this.movies.forEach(element => {
        console.log(element.image);
        element.image = IMG_PATH + element.image;
      });
    });
  }

   getMoviesByID(id){
    this.userService.getMovieDetailsById(id).subscribe(data =>{
      this.movies = data;
      this.movies.image = IMG_PATH + this.movies.image;
      console.log(this.movies.image);
      
    });
  }
}
