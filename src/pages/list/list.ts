import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable, Subscription, HelperService, select, TodoActions } from './../../store';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  @select(['auth', 'user']) user$: Observable<Object>;
  @select(['todo', 'success']) success$: Observable<Boolean>;
  @select(['todo', 'isLoading']) isLoading$: Observable<Boolean>;
  subscribtion: Subscription[] = [];
  user: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public hs: HelperService,
    public ta: TodoActions,
  ) {
    this.subscribtion[0] = this.isLoading$.subscribe(res => {
      if (res) return this.hs.presentLoading(false);
    });
    this.subscribtion[0] = this.user$.subscribe(user => {
      this.user = user;
    })
    this.subscribtion[1] = this.success$.subscribe(res => {
      if (!res) {
        return this.hs.dismissLoading();
      }
      this.hs.dismissLoading();
      console.log(res)
    })
  }
  addTodo(item) {
    console.log(item)
    if (!item.valid) {
      return console.log('input field incomplete')
    }
    let obj = {
      createBy: this.user._id,
      description: item.value.item
    }
    this.ta.addTodo(obj);
  }

}
