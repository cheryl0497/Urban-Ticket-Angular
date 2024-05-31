import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movies : any[];
  constructor(private adminService: AdminService) { }


  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(){
    this.adminService.getMoviesList().subscribe(data =>{
      this.movies = data;     
    });
  }

  public deleteMoviesById(id){
    this.adminService.deleteMovies(id).subscribe(data =>{
      console.log(data);
      window.location.reload();
    });
  }

}
