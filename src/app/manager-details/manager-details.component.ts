import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {

  managers : any[];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getManagers();
  }

  private getManagers(){
    return this.adminService.getManagersList().subscribe(data =>{
      this.managers = data;
      console.log(data);
      
    })
  }

  public deleteManagersById(id){
    this.adminService.deleteManager(id).subscribe(data =>{
      console.log(data);
      //this.ngOnInit();
      window.location.reload();
    });
  }

}
