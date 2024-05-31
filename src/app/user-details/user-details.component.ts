import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users: any[];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.adminService.getUsersList().subscribe(data =>{
      this.users = data;     
    });
  }
  
  public deleteUserById(id){
    this.adminService.deleteUser(id).subscribe(data =>{
      console.log(data);
      window.location.reload();
    });
  }


 
}
