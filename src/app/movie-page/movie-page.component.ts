import { SeatComponent } from './../seat/seat.component';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog,MatDialogConfig} from '@angular/material/dialog';


const IMG_PATH = '../../assets/image/';
@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  id: any;
  movie: any;
  constructor(private userService: UserService, private activatedroute: ActivatedRoute,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      console.log(this.id);
      this.userService.getMovieDetailsById(this.id).subscribe(data => {
        console.log(data);
        this.movie = data;
        this.movie.image = IMG_PATH + this.movie.image;
        console.log(this.movie);
        
      });
      
  });
  
  //this.getMovies(this.id);
  }
  onCreate(): void{
    console.log("hello");
    this.dialog.open(SeatComponent);
  }

}
