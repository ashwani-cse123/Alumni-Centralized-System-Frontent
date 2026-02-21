import { Component, inject, OnInit } from '@angular/core';
import { AlumniService } from '../../service/alumni.service';
import { error } from 'console';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../service/toast.service';

@Component({
  selector: 'app-alumni-post',
  imports: [FormsModule, CommonModule],
  templateUrl: './alumni-post.component.html',
  styleUrl: './alumni-post.component.css',
})
export class AlumniPostComponent implements OnInit {
  ngOnInit() {
    this.getPostByid();
  }

  alumniService = inject(AlumniService);
  authService = inject(AuthService);
  toast = inject(ToastService);
  userId: any = this.authService.getUser();

  postObj: any = {
    content: '',
    imageUrl: '',
  };
  getPostObj:any =[];

  creatPost() {
    console.log(this.postObj.content);
    this.alumniService.creatPost(this.userId.id, this.postObj).subscribe(
      (res: any) => {
        if (res) {
          this.toast.success('post created');
          this.postObj = {
            content: '',
            imageUrl: '',
          };
        }
        this.getPostByid();
      },
      (error) => {
        this.toast.warning('there is error in creating post..');
      },
    );
  }

  deletePost(postId:any){
    this.alumniService.deletePostByUserId(postId,this.userId.id).subscribe((res:any)=>{
      this.getPostByid();
    },(error)=>{
      this.toast.error("any error accured..");
    })

  }

  getPostByid() {
    this.alumniService.getPostByUserId(this.userId.id).subscribe(
      (res: any) => {
          console.log(res);
          this.getPostObj = res;
      
      },
      (error) => {
        if (error.error.satus === 500) {
          this.toast.error('any error is accured..');
        }
      },
    );
  }
}
