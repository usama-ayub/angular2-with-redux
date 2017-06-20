import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../';

@Injectable()

export class AuthActions {

  static REGISTER: string = 'REGISTER';
  static REGISTER_SUCCESS: string = 'REGISTER_SUCCESS';
  static REGISTER_FAIL: string = 'REGISTER_FAIL';

  static LOGIN: string = 'LOGIN';
  static LOGIN_SUCCESS: string = 'LOGIN_SUCCESS';
  static LOGIN_FAIL: string = 'LOGIN_FAIL';

  static LOGOUT: string = 'LOGOUT';


  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  register(credentials: Object): void {
    this.ngRedux.dispatch({
      type: AuthActions.REGISTER,
      payload: credentials
    });
  }
  login(credentials: Object): void {
    this.ngRedux.dispatch({
      type: AuthActions.LOGIN,
      payload: credentials
    })
  }
  logout(): void {
    this.ngRedux.dispatch({
      type: AuthActions.LOGOUT
    })
  }
}
