import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseURL } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {

  http = inject(HttpClient);

  getAlumniByUserId(userId:any){
    return this.http.get(`${baseURL}/alumni/getAlumni/${userId}`);
  }

  updateAlumniProfile(updateObj:any){
    return this.http.put(`${baseURL}/alumni/updateProfile/${updateObj.usersId}`,updateObj,{responseType:'JSON' as 'text'});
  }

  postJobs(id:any,jobPostObj:any){
    return this.http.post(`${baseURL}/alumni/postJob/${id}`,jobPostObj,{responseType:'JSON' as 'text'});
  }

  getJobByUserId(userId:any){
    return this.http.get(`${baseURL}/alumni/getAllJobs/${userId}`);
  }

  deleteJobById(jobId:any){
    return this.http.delete(`${baseURL}/alumni/deleteJob/${jobId}`,{responseType:'JSON' as 'text'});
  }

  //creating post
  creatPost(userId:any,postObj:any){
    return this.http.post(`${baseURL}/post/creatPost/${userId}`,postObj);
  }

  //getting post by user id
  getPostByUserId(userId:any){

    return this.http.get(`${baseURL}/post/getPostByUserId/${userId}`);

  }

  //delete post by userId
  deletePostByUserId(postId:any,userId:any){
    return this.http.delete(`${baseURL}/post/deletePostByPostId-userId/${postId}/${userId}`,{responseType:'JSON' as 'text'});
  }

}
