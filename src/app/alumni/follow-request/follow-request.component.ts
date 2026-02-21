import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FollowService } from '../../service/follow.service';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../service/toast.service';

@Component({
  selector: 'app-follow-request',
  imports: [FormsModule,CommonModule],
  templateUrl: './follow-request.component.html',
  styleUrl: './follow-request.component.css'
})
export class FollowRequestComponent implements OnInit{
  authServie = inject(AuthService);
  conectionService = inject(FollowService);
  toast = inject(ToastService);
  ngOnInit() {
    this.getFollowRequest();
  }
  getRequestObj:any =[];
  userId:any = this.authServie.getUser();
  
  getFollowRequest(){
    this.conectionService.getAllFollowRequest(this.userId.id).subscribe((res:any)=>{
      this.getRequestObj = res;
    },(error)=>{
      this.toast.error("something went wrong");
    })
  }

  aceptFollowRequest(requestid:any){
    this.conectionService.acceptFollowRequest(requestid,this.userId.id).subscribe((res:any)=>{
      this.toast.success(res);
      this.getFollowRequest();
    },(error)=>{
      this.toast.error("alert something went wrong.");
    })
  }

  rejectFollowRequest(senderId:any){

    this.conectionService.unfollow(senderId,this.userId.id).subscribe((res:any)=>{
      this.getFollowRequest();
      this.toast.success(res);
    },(error)=>{
      this.toast.error("error accured: "+error.message);
    })

  }

}
