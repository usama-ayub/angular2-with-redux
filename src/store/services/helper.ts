import { Injectable } from '@angular/core';
import { ToastController, LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class HelperService {

    loading: Loading;

    constructor(private toastCtrl: ToastController, private loadingCtrl: LoadingController) { }

    /*  presentToast(message: string, caller: string) {
       let toast = this.toastCtrl.create({
         message: message,
         duration: 3000,
         position: 'bottom'
       });
       toast.present();
     }
     presentGuardianToast(message: string, caller: string) {
       let toast = this.toastCtrl.create({
         message: message,
         duration: 5000,
         position: 'bottom'
       });
       toast.present();
     } */
    presentLoading(caller: any) {
        this.loading = this.loadingCtrl.create({
            content: caller ? caller : 'Please wait...'
        });
        this.loading.present();
    }

    dismissLoading() {
        if (this.loading) {
            this.loading.dismissAll();
            this.loading = null;
        }
    }

}
