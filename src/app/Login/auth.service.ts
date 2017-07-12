import { Injectable } from '@angular/core';
import { User } from "app/user";
import { Observable } from "rxjs/Rx";
import { RouterModule, Routes } from '@angular/router';


@Injectable()
export class AuthService {

  user: User = null;

  public login(username: string, password: string) : Observable<Boolean>{
    if(username === 'admin' && password === 'password'){
      this.user = new User();
      this.user.username = username;
      this.user.password = password;
      return Observable.of(true);

    } else {
      return Observable.of(false);
    }
  }
}