import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { AlumniService } from '../../../service/alumni.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { zip } from 'rxjs';
import { DashboardAlumniComponent } from '../dashboard-alumni.component';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-update-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css',
})
export class UpdateProfileComponent implements OnInit {
  ngOnInit(): void {
    this.loadLocalUser();
  }

  authService = inject(AuthService);
  alumniService = inject(AlumniService);
  route = inject(Router);
  toast = inject(ToastService);

  userObj: any = [];
  userId: any;
  loadLocalUser() {
    this.userObj = this.authService.getUser();
    this.userId = this.userObj.id;
    this.updateObj.usersId = this.userId;
  }

  updateObj: any = {
    usersId: null,
    name: '',
    batch: '',
    branch: '',
    company: '',
    designation: '',
    linkedinUrl: '',
    imageUrl: '',
  };
  onSubmit() {
    if (this.updateObj.name === null || this.updateObj.name === '') {
      this.toast.warning('Enter your Name');
    } else if (this.updateObj.batch === null || this.updateObj.batch === '') {
      this.toast.warning('Enter your Batch');
    } else if (this.updateObj.branch === null || this.updateObj.branch === '') {
      this.toast.warning('Enter your Branch');
    } else if (
      this.updateObj.company === null ||
      this.updateObj.company === ''
    ) {
      this.toast.warning('Enter your Company');
    } else if (
      this.updateObj.designation === null ||
      this.updateObj.designation === ''
    ) {
      this.toast.warning('Enter your Designation');
    } else if (
      this.updateObj.linkedinUrl === null ||
      this.updateObj.linkedinUrl === ''
    ) {
      this.toast.warning('Enter your LinkedIn URL');
    } else if (
      this.updateObj.imageUrl === null ||
      this.updateObj.imageUrl === ''
    ) {
      this.toast.warning('Please upload your Profile Image');
    } else {
      this.alumniService.updateAlumniProfile(this.updateObj).subscribe(
        (res: any) => {
          this.route.navigateByUrl('navbar/alumni');
        },
        (error) => {
          alert('any error ');
        },
      );
      this.toast.success('Profile updated successfully');
    }
  }
}
