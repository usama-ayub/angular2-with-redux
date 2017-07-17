

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthActions, Observable, Subscription, HelperService, select } from './../../store';
import { ListPage } from '../../pages/list/list';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @select(['auth', 'success']) success$: Observable<Boolean>;
  @select(['auth', 'error']) error$: Observable<Boolean>;
  @select(['auth', 'isLoading']) isLoading$: Observable<Boolean>;
  subscribtion: Subscription[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public hs: HelperService,
    public aa: AuthActions,
  ) {
    this.subscribtion[0] = this.isLoading$.subscribe(res => {
      if (res) return this.hs.presentLoading(false);
    });
    this.subscribtion[1] = this.success$.subscribe(res => {
      if (!res) {
        return this.hs.dismissLoading();
      }
      this.hs.dismissLoading();
      this.navCtrl.setRoot(ListPage);
      console.log(res);
    });
  }

  login(user) {
    if (!user.valid) {
      return console.log('input field incomplete')
    }
    this.aa.login(user.value);
  }
  ionViewDidLoad() { }

}
