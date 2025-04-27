import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<string>(localStorage.getItem('guardState') ?? 'block');
  authState$ = this.authState.asObservable();

  constructor() {}

  setAuthState(state: string) {
    localStorage.setItem('guardState', state);
    this.authState.next(state);
  }

  getAuthState() {
    return this.authState.value;
  }

  logout() {
    this.setAuthState('block');
  }
}