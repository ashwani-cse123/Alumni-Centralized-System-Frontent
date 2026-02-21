import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { AlumniService } from '../../service/alumni.service';
import { error } from 'console';
import { ToastService } from '../../service/toast.service';

@Component({
  selector: 'app-dashboard-alumni',
  imports: [RouterLink],
  templateUrl: './dashboard-alumni.component.html',
  styleUrl: './dashboard-alumni.component.css',
})
export class DashboardAlumniComponent implements OnInit {
  ngOnInit(): void {
    this.loadUserObj();
  }
  authService = inject(AuthService);
  alumniService = inject(AlumniService);
  toast = inject(ToastService);
  userObj:any =[];
  alumniObj:any =[];

  loadUserObj(){
    this.userObj = this.authService.getUser();
    this.userId = this.userObj.id;
    this.loadAlumniByuserId();
  }
  userId:any;
  loadAlumniByuserId(){
    this.alumniService.getAlumniByUserId(this.userId).subscribe((res:any)=>{
      this.alumniObj = res;
    },(error)=>{
      this.toast.error("any error is accureed...");
    })
  }

}
