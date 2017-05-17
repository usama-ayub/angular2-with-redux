import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable, Subscription, AuthActions } from '../../store';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private aa: AuthActions) {
  }
  doLogin(user) {
    event.preventDefault();
    if (!user.valid) {
      console.log("false")
    } else {
     this.aa.login(user.value);
      /*this.auth.login(this.user)
        .subscribe(result => {
          if (result.status == 200) {
            console.log(result);
            this.app.LoaderHide();
            this.data = result
            localStorage.setItem('loginData', this.data._body);
            this.navCtrl.setRoot(HomePage)
            this.user = { email: '', password: '' }
          }
        }, error => {
          console.log("Error happened" + error)
        })*/
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
