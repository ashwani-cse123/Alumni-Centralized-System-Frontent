import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseURL } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  http = inject(HttpClient);

  getAllJobs(){
    return this.http.get(`${baseURL}/alumni/getAllJobs`);
  }

  getJobByJobId(id:any){
    return this.http.get(`${baseURL}/alumni/getAllJobsByJobId/${id}`);
  }

  getAllUsers(){
    return this.http.get(`${baseURL}/allUsers`);
  }

  getAllPost(){
    return this.http.get(`${baseURL}/post/getAllPost`);
  }
}
