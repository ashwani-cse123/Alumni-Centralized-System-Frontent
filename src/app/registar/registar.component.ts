import { CommonModule } from '@angular/common';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginSignupService } from '../service/login-signup.service';
import { error } from 'console';
import { Router, RouterLink } from '@angular/router';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-registar',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './registar.component.html',
  styleUrl: './registar.component.css'
})
export class RegistarComponent implements OnInit{

  loginSignupService = inject(LoginSignupService);
  route = inject(Router);
  toastService = inject(ToastService);

  ngOnInit(): void {
    
  }

  ragistarObj:any ={
  "name": "",
  "email": "",
  "password": "",
  "role": ""
  }

  onClick(){

    this.loginSignupService.signUp(this.ragistarObj).subscribe((res:any)=>{
      this.toastService.success("You Have Successfully Registar...");
      this.route.navigateByUrl('/');
      
    },(error)=>{
      this.toastService.error("error accured");
    })

  }



}
