import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginSignupService } from '../service/login-signup.service';
import { error } from 'console';
import { AuthService } from '../service/auth.service';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginService = inject(LoginSignupService);
  route = inject(Router);
  authService = inject(AuthService);
    toastService = inject(ToastService);

  loginObj: any = {
    email: '',
    password: '',
  };

  onSubmit() {
    this.loginService.login(this.loginObj).subscribe((res:any)=>{
      this.toastService.success("you are login as: "+ res.role);
      if(res.role=='STUDENT'){
        this.authService.setUser(res);
        localStorage.setItem('isLogin','true');
        this.route.navigateByUrl('/navbar');
      }else if(res.role=="ALUMNI"){
        this.authService.setUser(res);
        localStorage.setItem('isLogin','true');
        this.route.navigateByUrl('/navbar');
      }else if(res.role=="ADMIN"){
        this.authService.setUser(res);
        localStorage.setItem('isLogin','true');
        this.route.navigateByUrl('/navbar');
      }
        // ✅ notify navbar
  window.dispatchEvent(new Event('login-success'));

    },(error)=>{
      if(error.error.message==="User is not registar plese register first..."){
        this.toastService.warning("User is not registar plese register first...");
        this.route.navigateByUrl("/sign-up");
        return;
      }
       if(error.error.message==="Invalid emailId...."){
        this.toastService.warning(error.error.message);
        this.loginObj.email ='';
        return;
      }
       if(error.error.message==="Invalid password"){
        this.toastService.error(error.error.message);
        this.loginObj.password ='';
        return;
      }
      this.toastService.info("Wait for admin approval.....once admin approved then you can login your account..");
      this.route.navigateByUrl('/');
    })
  }
}
