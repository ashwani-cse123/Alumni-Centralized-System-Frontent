import { Component, inject, OnInit } from '@angular/core';
import { FollowService } from '../../service/follow.service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../service/toast.service';

@Component({
  selector: 'app-followers-following',
  imports: [FormsModule, CommonModule],
  templateUrl: './followers-following.component.html',
  styleUrl: './followers-following.component.css',
})
export class FollowersFollowingComponent implements OnInit {
  connectionSevice = inject(FollowService);
  router = inject(Router);
  toast = inject(ToastService);
  authService = inject(AuthService);
  ngOnInit(): void {
    this.getFollower();
    this.getFollowing();
  }
  followerCount: number = 0;
  followingCount: number = 0;
  followerObj: any = [];
  followingObj: any = [];
  followingIds = new Set<number>();
  followStatusMap = new Map<number, string>();
  userId = this.authService.getUser();
  buttonStatus:any;

  getFollower() {
    this.connectionSevice.getAllFollower(this.userId.id).subscribe(
      (res: any) => {
        this.followerObj = res;
        this.followerCount = this.followerObj.length;
        res.forEach((user:any) => {
        this.checkFollowRequest(user.id);
      });
      },
      (error) => {
        this.toast.error('something went worng');
      },
    );
  }

onFollowRequest(receiverId: any) {
  this.connectionSevice
    .sendFollowRequest(this.userId.id, receiverId)
    .subscribe(
      () => {
        this.followStatusMap.set(receiverId, 'PENDING');
      },
      () => this.toast.error('wrong ho gaya..')
    );
}

checkFollowRequest(receiverId: number) {
  this.connectionSevice
    .getFollowRequestStatus(this.userId.id, receiverId)
    .subscribe(
      (res: any) => {
        this.followStatusMap.set(receiverId, res.status);
      },
      () => {
        this.followStatusMap.set(receiverId, 'NONE');
      }
    );
}

  onUnfollow(reciverId:any){
    this.connectionSevice.unfollow(this.userId.id,reciverId).subscribe((res:any)=>{
      this.toast.success(res);
      this.getFollowing();
    },(error)=>{
      this.toast.error("not unfollowing");
    })
  }

  getFollowing() {
    this.connectionSevice.getAllFollowing(this.userId.id).subscribe(
      (res: any) => {
        this.followingObj = res;
        this.followingCount = this.followingObj.length;
        this.followingIds = new Set(res.map((u: any) => u.id));
      },
      (error) => {
        this.toast.error('something went worng');
      },
    );
  }

  isCheckFollow(id:any):boolean {
    return this.followingIds.has(id);
  }
}
