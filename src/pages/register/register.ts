import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthActions, Observable, Subscription, HelperService, select } from './../../store';
import { LoginPage } from './../login/login';
import { ListPage } from '../../pages/list/list';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @select(['auth', 'success']) success$: Observable<any>;
  @select(['auth', 'isLoading']) isLoading$: Observable<Boolean>;

  subscribtion: Subscription[] = [];
  login: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public hs: HelperService,
    public aa: AuthActions,
  ) {
    this.login = LoginPage
    this.subscribtion[0] = this.isLoading$.subscribe(res => {
      if (res) return this.hs.presentLoading(false);
      this.hs.dismissLoading();
    });
    this.success$.subscribe(res => {
      if (!res.success) return this.hs.presentToast(res.error);
      localStorage.setItem('user', JSON.stringify(res.data));

      this.hs.presentToast('Register Success');
      this.navCtrl.setRoot(ListPage);
    });
  }

  register(user) {
    if (!user.valid) {
      return this.hs.presentToast('input field incomplete');
    }
    this.aa.register(user.value);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
