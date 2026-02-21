import { Component, inject, OnInit } from '@angular/core';
import { UpdateProfileComponent } from '../../../alumni/dashboard-alumni/update-profile/update-profile.component';
import { AuthService } from '../../../service/auth.service';
import { StudentService } from '../../../service/student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-update-student-profile',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-student-profile.component.html',
  styleUrl: './update-student-profile.component.css',
})
export class UpdateStudentProfileComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  authService = inject(AuthService);
  studentService = inject(StudentService);
  route = inject(Router);

  formObj: any = {
    rollNo: '',
    branch: '',
    year: '',
  };
  user:any = this.authService.getUser();
  updateProfile() {
    this.studentService
      .updateStudentProfile(this.user.id, this.formObj)
      .subscribe({
        next: (res) => {
          alert(res);
          this.route.navigateByUrl('dashboard');
          this.formObj = {
            rollNo: '',
            branch: '',
            year: '',
          };
        },
        error: (err) => {
          alert('the error is accured ' + err.message);
        },
      });
  }
}
