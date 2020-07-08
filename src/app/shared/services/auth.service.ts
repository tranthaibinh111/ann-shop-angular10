import { Injectable } from '@angular/core';

// interfaces
import { Role, Account } from '../interfaces/account/account'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private account: Account;

  constructor() { }

  isAuthorized() {
    return !!this.account;
  }

  hasRole(role: Role) {
    return this.isAuthorized() && this.account.role === role;
  }

  login(account: Account) {
    this.account = account;
  }

  logout() {
    this.account = null;
  }
}
