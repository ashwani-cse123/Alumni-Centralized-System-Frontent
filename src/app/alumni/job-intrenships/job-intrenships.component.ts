import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlumniService } from '../../service/alumni.service';
import { AuthService } from '../../service/auth.service';
import { error } from 'console';
import { ToastService } from '../../service/toast.service';

@Component({
  selector: 'app-job-intrenships',
  imports: [FormsModule, CommonModule],
  templateUrl: './job-intrenships.component.html',
  styleUrl: './job-intrenships.component.css',
})
export class JobIntrenshipsComponent implements OnInit{

  alumniService = inject(AlumniService);
  authSevice = inject(AuthService);
  toast = inject(ToastService);
  /** 🔹 Form Binding Object */
  jobObj: any = {
    title: '',
    image: '',
    description: '',
    company: '',
    location: '',
    jobType: '',
    applyLink: '',
  };

  /** 🔹 Table Data Object */
  jobList: any = [];

  // logged-in alumni id
   userObj:any = this.authSevice.getUser();

  ngOnInit() {
    this.getAllJobByUserId();
  }

  submitJob() {
    this.alumniService.postJobs(this.userObj.id,this.jobObj).subscribe((res:any)=>{
      this.toast.success(res);
      this.getAllJobByUserId();
      this.resetForm();
    },(error)=>{
      this.toast.error("any error accured....");
    })

  }

  getAllJobByUserId(){
    this.alumniService.getJobByUserId(this.userObj.id).subscribe((res:any)=>{
      this.jobList = res;
    })
  }
  deleteJob(id: any) {
    this.alumniService.deleteJobById(id).subscribe((res:any)=>{
      this.toast.success(res);
      this.getAllJobByUserId();

    },(error)=>{
      this.toast.error("error accured");
    })
  }

  resetForm() {
    this.jobObj = {
      title: '',
      image: '',
      description: '',
      company: '',
      location: '',
      jobType: 'JOB',
      applyLink: '',
    };
  }
}
