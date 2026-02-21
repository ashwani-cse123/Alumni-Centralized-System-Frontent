import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseURL } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {


  http = inject(HttpClient);

  signUp(ragistarObj:any){
   return this.http.post(`${baseURL}/registar`,ragistarObj);
  }

  login(loginObj:any){
    return this.http.post(`${baseURL}/login`,loginObj);
  }
     
  getAllUsers(){
    return this.http.get(`${baseURL}/allUsers`);
  }
  makeAction(actionObj:any){
    return this.http.put(`${baseURL}/action`,actionObj,{responseType:'JSON' as 'text'});
  }
  
    
}
