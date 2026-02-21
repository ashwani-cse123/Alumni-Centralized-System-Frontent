import { Component, inject, OnInit } from '@angular/core';
import { DashboardAlumniComponent } from "../../alumni/dashboard-alumni/dashboard-alumni.component";
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-student-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent implements OnInit{
  ngOnInit(): void {
   this.getUserProfile();
  }
  authServie = inject(AuthService);
  studentService = inject(StudentService);
  userObj = this.authServie.getUser();
  userProfile:any =[];
  getUserProfile(){
    this.studentService.getStudentProfile(this.userObj.id).subscribe((res:any)=>{
      this.userProfile = res;
    })
  }


}
