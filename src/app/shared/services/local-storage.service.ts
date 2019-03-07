import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  save(name: string, value: any): any {
    value = JSON.stringify(value);
    localStorage.setItem(name, value);
  }

  get(name: string): any {
    const value = localStorage.getItem(name);
    try {
      return JSON.parse(value);
    } catch (err) {
      return null;
    }
  }

  remove(name: string): any {
    localStorage.removeItem(name);
  }
}
