import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import { UserService } from '../_services/user.service';

const IMG_PATH = '../../assets/image/';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content: string;

  usertag = false;

  movies : any;


  constructor(private userService: UserService, private adminService : AdminService) { }

  ngOnInit(): void {
    this.getMovies();
    console.log(this.movies);
    
    this.userService.getAdminBoard().subscribe(
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
      console.log(data);
      this.movies.forEach(element => {
        element.image = IMG_PATH + element.image; 
        this.movies.image = IMG_PATH + element.image;
        console.log(this.movies.image);
      });
    });
  }

  

}
