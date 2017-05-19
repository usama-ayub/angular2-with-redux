import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../';

@Injectable()

export class AuthActions {

  static REGISTER: string = 'REGISTER';
  static REGISTER_FAIL: string = 'REGISTER_FAIL';
  static REGISTER_SUCCESS: string = 'REGISTER_SUCCESS';

  static LOGIN: string = 'LOGIN';
  static LOGIN_SUCCESS: string = 'LOGIN_SUCCESS';
  static LOGIN_FAIL: string = 'LOGIN_FAIL';

  static LOGOUT: string = 'LOGOUT';

  static LOGGEDIN: string = 'LOGGEDIN';
  static ISLOADING_END: string = 'ISLOADING_END';
  static ISLOGGEDIN_SUCCESS: string = 'ISLOGGEDIN_SUCCESS';
  static ISLOGGEDIN_FAIL: string = 'ISLOGGEDIN_FAIL';
  static ISLOGGEDINBTN_SUCCESS: string = 'ISLOGGEDINBTN_SUCCESS';
  static ISLOGGEDINBTN_FAIL: string = 'ISLOGGEDINBTN_FAIL';

  static ISREGISTERED_SUCCESS: string = 'ISREGISTERED_SUCCESS';
  static ISREGISTERED_FAIL: string = 'ISREGISTERED_FAIL';
  static RESSETED_SUCCESS: string = 'RESSETED_SUCCESS';
  static RESSETED_FAIL: string = 'RESSETED_FAIL';


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

  logedIn(): void {
    this.ngRedux.dispatch({
      type: AuthActions.LOGGEDIN,
    })
  }
}
