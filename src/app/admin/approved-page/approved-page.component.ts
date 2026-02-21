import { Component, inject, OnInit } from '@angular/core';
import { LoginSignupService } from '../../service/login-signup.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-approved-page',
  imports: [CommonModule],
  templateUrl: './approved-page.component.html',
  styleUrl: './approved-page.component.css',
})
export class ApprovedPageComponent implements OnInit {
  loginService = inject(LoginSignupService);
  ngOnInit(): void {
    this.getAllUsers();
  }
  approvedResObj: any = [];
  getAllUsers() {
    this.loginService.getAllUsers().subscribe((res: any) => {
      this.approvedResObj = res;
    });
  }
  approve: any = {
    userId: '',
    status: 'APPROVED',
  };

  rejected: any = {
    userId: '',
    status: 'REJECTED',
  };
  approvedButton(id: any) {
    if(confirm('are you sure to approved....')){
        this.approve.userId = id;
    this.loginService.makeAction(this.approve).subscribe(
      (res: any) => {
        this.getAllUsers();
      },
      (error) => {
        alert('any error accured..');
      },
      );
    }
  }
  rejectButton(id: any) {
    if (confirm('are you sure to reject....')) {
      this.rejected.userId = id;
      this.loginService.makeAction(this.rejected).subscribe(
        (res: any) => {
          this.getAllUsers();
        },
        (error) => {
          alert('any error accured..');
        },
      );
    }
  }
}
