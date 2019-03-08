import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Status } from '../interfaces/status';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private localStorageService: LocalStorageService
  ) { }

  destroySession(): Promise<Status> {
    return new Promise((resolve, reject) => {
      this.localStorageService.remove('logged-user');
      setTimeout(resolve, 200, {status:'ok'});
    });
  }

  getLoggedUser(): Promise<User> {
    return new Promise((resolve, reject) => {
      const loggedUser = this.localStorageService.get('logged-user');
      if (loggedUser) {
        this.getUserByEmail(loggedUser).then((user) => {
          setTimeout(resolve, 200, user);
        });
      } else {
        setTimeout(reject, 200, 'Unknown');
      }
    });
  }

  getUserByEmail(userEmail: string): Promise<User> {
    return new Promise((resolve, reject) => {
      const users = this.localStorageService.get('users') || [];
      const foundUser = users.find((user) => {
        return user.email === userEmail;
      });

      if (foundUser) {
        resolve(foundUser);
      } else {
        reject(null);
      }
    });
  }

  isLoggedUser(): Promise<Status> {
    return new Promise((resolve, reject) => {
      const user = this.localStorageService.get('logged-user');
      if (user) {
        setTimeout(resolve, 200, {status:'ok'});
      } else {
        setTimeout(reject, 200, {status:'err'});
      }
    })
  }

  saveLoggedUser(user): Promise<Status> {
    return new Promise((resolve, reject) => {
      this.localStorageService.save('logged-user', user.email);
      setTimeout(resolve, 200, {status:'ok'});
    });
  }

  authenticate(formData): Promise<Status> {
    return new Promise((resolve, reject) => {
      const users = this.localStorageService.get('users') || [];
      const status = users.find((user) => {
        return user.email === formData.email && user.password == formData.password;
      });

      if (status) {
        resolve({status:'ok'});
      } else {
        reject({status:'err'});
      }
    });
  }

  register(formData: any): Promise<Status> {
    return new Promise((resolve, reject) => {
      const users = this.localStorageService.get('users') || [];
      users.push(formData);

      this.localStorageService.save('users', users);
      setTimeout(resolve, 500, { status: 'ok' });
    });
  }
}
