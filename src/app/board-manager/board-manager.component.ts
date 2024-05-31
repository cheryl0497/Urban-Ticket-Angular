import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import{ManagerService} from '../_services/manager.service';
import { ActivatedRoute } from '@angular/router';

import { MatDialog,MatDialogConfig} from '@angular/material/dialog';

const IMG_PATH = '../../assets/image/';

@Component({
  selector: 'app-board-manager',
  templateUrl: './board-manager.component.html',
  styleUrls: ['./board-manager.component.css']
})
export class BoardManagerComponent implements OnInit {

  content: string;
  movies : any;
  id: any;

  constructor(private userService: UserService, private managerService: ManagerService,private activatedroute: ActivatedRoute,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscribeMethod();
    this.getManager();
   
}

subscribeMethod(): void{
  this.userService.getManagerBoard().subscribe(
    data => {
      this.content = data;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    }
  );
}

getManager(): void{
   this.activatedroute.paramMap.subscribe(params => { 
       this.id = params.get('id');
       console.log(this.id);
       this.managerService.getMovieDetailsByManagerId(this.id).subscribe(data => {
        console.log(data);
        this.movies = data;
        this.movies.forEach(element => {
          console.log(element.image);
          element.image = IMG_PATH + element.image;
          this.movies.image = IMG_PATH + element.image;
        });
        
        console.log(this.movies);
      });
    });
  }

  public deleteMoviesById(id){
    this.managerService.deleteMovies(id).subscribe(data =>{
      console.log(data);
      window.location.reload();
    });
  }

 
}
