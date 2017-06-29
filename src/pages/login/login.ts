

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthActions } from './../../store/action/auth';
import { IError } from './../../store/reducers/auth';
import { select, NgRedux } from 'ng2-redux';
import { Observable, Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @select(['auth', 'success']) success$: Observable<Object>;
  @select(['auth', 'error']) error$: Observable<IError>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
   public aa: AuthActions
  ) {
  }

  login(user) {
    if (!user.valid) {
      return console.log('input field incomplete')
    }
    this.aa.login(user.value);
  }
  ionViewDidLoad() { }

}
