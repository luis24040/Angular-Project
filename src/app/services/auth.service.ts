import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged:boolean = true;

  constructor() { }

  authenticate():boolean{
    return this.isLogged;
  }
}
