import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

   ngOnInit() {
    this.syncLoginState();
     window.addEventListener('login-success', () => {
    this.syncLoginState();
  });
  }
  isLogged:boolean = false;
  title = 'alumni-frontent';
  authService  = inject(AuthService);
  router = inject(Router);

  userData:any = this.authService.getUser();
  
  getAccess(){
    if(this.userData.role==='ALUMNI'){
      this.router.navigateByUrl('navbar/alumni');
    }else if(this.userData.role==='STUDENT'){
      this.router.navigateByUrl('navbar/student');
    }else if(this.userData.role==='ADMIN'){
        this.router.navigateByUrl('navbar/admin');
    }else{
      alert("not navigated..");
    }

  }
   syncLoginState() {
    this.isLogged = localStorage.getItem('isLogin') === 'true';
  }
  
  onLogout(){
    this.authService.logout();
    this.isLogged = false;
    this.router.navigateByUrl('/');
  }

}
