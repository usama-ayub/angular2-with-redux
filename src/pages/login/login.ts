
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthActions, Observable, Subscription, HelperService, select } from './../../store';
import { ListPage } from '../../pages/list/list';
import { RegisterPage } from './../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @select(['auth', 'success']) success$: Observable<any>;
  @select(['auth', 'isLoading']) isLoading$: Observable<Boolean>;

  subscribtion: Subscription[] = [];
  register: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public hs: HelperService,
    public aa: AuthActions,
  ) {
    this.register = RegisterPage
    this.subscribtion[0] = this.isLoading$.subscribe(res => {
      if (res) return this.hs.presentLoading(false);
      this.hs.dismissLoading();
    });
    this.success$.subscribe(res => {
      console.log(res);
      if (!res.success) return this.hs.presentToast(res.error);
      localStorage.setItem('user', JSON.stringify(res.data));

      this.hs.presentToast('Login Success');
      this.navCtrl.setRoot(ListPage);
    });
  }

  login(user) {
    if (!user.valid) {
      return this.hs.presentToast('input field incomplete');
    }
    this.aa.login(user.value);
  }
  ionViewDidLoad() {
    let userLogined = JSON.parse(localStorage.getItem('user'));
    if (userLogined) return this.navCtrl.setRoot(ListPage);
  }

}
