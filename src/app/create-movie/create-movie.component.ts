import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagerService } from '../_services/manager.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  selectedFile: File;
  form: any = {};
  isSuccessful = false;
  isUploadFailed = false;
  errorMessage = '';
  username: string;
  shortLink: string = ""; 
  loading: boolean = false; // Flag variable 
  file: File = null; // Variable to store file 
  

  constructor(private  managerService: ManagerService, private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.username = this.tokenStorageService.getUser().username;
     // console.log(this.username);
    }
  }

  // On file Select 
  onChange(event) { 
    this.file = event.target.files[0]; 
    // console.log(this.file.name);
    // console.log(this.form.mimage);
    this.form.mimage = this.file.name;  
} 


  onSubmit(): void {
    this.managerService.insertmovie(this.form).subscribe(
      data => {
        // console.log(data);
        // console.log(this.form);
        this.username = this.tokenStorageService.getUser().username;
        this.isSuccessful = true;
        this.isUploadFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isUploadFailed = true;
      }  
    );
    this.loading = !this.loading; 
    console.log(this.file); 
    this.managerService.upload(this.file).subscribe( 
        (event: any) => { 
            if (typeof (event) === 'object') { 

                // Short link via api response 
                this.shortLink = event.link; 

                this.loading = false; // Flag variable  
            } 
        } 
    );
  }

}
