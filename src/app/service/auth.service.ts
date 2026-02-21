import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any = null;

  setUser(user: any) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }


  getUser() {
    if (this.user) return this.user;

    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  logout() {
    this.user = null;
    localStorage.clear();
  }
}
