import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseURL } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  http = inject(HttpClient);
  
  updateStudentProfile(userId:any,updateObj:any){
   return this.http.put(`${baseURL}/student/updateProfile/${userId}`,updateObj,{responseType:'JSON' as 'text'});
  }
  getStudentProfile(userId:any){
    return this.http.get(`${baseURL}/student/getStudentProfile/${userId}`);
  }
}
