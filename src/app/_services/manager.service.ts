import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://localhost:8080/api/auth/';

const API_URL_IMG = 'http://localhost:8080/api/auth/upload/local';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
 username: string;
  constructor(private http: HttpClient,private tokenStorageService :TokenStorageService) {
    this.username = this.tokenStorageService.getUser().username;
   }

  insertmovie(movie): Observable<any> {
    //console.log(movie.mimage);
    
    return this.http.post(API_URL + 'addmovie', {
      name: movie.mname,
      language: movie.mlanguage,
      genre: movie.mgenre,
      date: movie.mdate,
      image: movie.mimage,
      time: movie.mtime,
      description: movie.mdescription,      
      user: this.username
      
    }, httpOptions);
  }
 

  getMovieDetailsByManagerId(id): Observable<any> {
    return this.http.get<any[]>(API_URL + 'getmoviesbymanager/' + id, { responseType: 'json'});
  }

  deleteMovies(id): Observable<any> {
    return this.http.delete(API_URL + 'deletemoviebyid/'+ id, {responseType: 'text'})
  }

  // Returns an observable 
  upload(file):Observable<any> { 
  
    // Create form data 
    const formData = new FormData();   
      
    // Store form name as "file" with file data 
    formData.append("file", file, file.name); 
      
    // Make http post request over api 
    // with formData as req 
    return this.http.post(API_URL_IMG, formData);
} 

}
