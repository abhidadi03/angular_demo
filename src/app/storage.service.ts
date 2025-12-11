import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  get(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
