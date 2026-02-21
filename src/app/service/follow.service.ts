import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseURL } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  http = inject(HttpClient);

  sendFollowRequest(senderId:any,reciverId:any){
    return this.http.post(`${baseURL}/followFollowing/sendRequest/${senderId}/${reciverId}`,null,{responseType:'JSON' as 'text'});
  }

  getFollowRequestStatus(senderId:any,reciverId:any){
    return this.http.get(`${baseURL}/followFollowing/getFollowRequest-status/${senderId}/${reciverId}`);
  }

  getAllFollower(reciverId:any){
   return this.http.get(`${baseURL}/followFollowing/getFollowers/${reciverId}`);
  }

  getAllFollowing(senderId:any){
    return this.http.get(`${baseURL}/followFollowing/getFollowing/${senderId}`);
  }

  getAllFollowRequest(reciverId:any){
    return this.http.get(`${baseURL}/followFollowing/getAllFollowRequest/${reciverId}`);
  }

  unfollow(senderId:any, reciverId:any){
    return this.http.delete(`${baseURL}/followFollowing/unFollow/${senderId}/${reciverId}`,{responseType:'JSON' as 'text'});
  }

  acceptFollowRequest(requestId:any,reciverId:any){
    return this.http.post(`${baseURL}/followFollowing/acceptRequest/${requestId}/${reciverId}`,null,{responseType:'JSON' as 'text'});
  }

}
