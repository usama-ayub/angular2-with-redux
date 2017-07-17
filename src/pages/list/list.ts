import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable, Subscription, HelperService, select, TodoActions } from './../../store';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {
  @select(['auth', 'user']) user$: Observable<Object>;
  @select(['todo', 'success']) success$: Observable<Boolean>;
  @select(['todo', 'isLoading']) isLoading$: Observable<Boolean>;
  @select(['todo', 'todo']) todo$: Observable<Object>;
  @select(['todo', 'getTodo']) getTodo$: Observable<any>;
  subscribtion: Subscription[] = [];
  user: any;
  todo = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public hs: HelperService,
    public ta: TodoActions,
  ) {
    this.subscribtion[0] = this.isLoading$.subscribe(res => {
      if (res) return this.hs.presentLoading(false);
    });
    this.subscribtion[1] = this.user$.subscribe(user => {
      this.user = user;
    })
    this.subscribtion[2] = this.success$.subscribe(res => {
      if (!res) {
        return this.hs.dismissLoading();
      }
      this.hs.dismissLoading();
    })
    this.subscribtion[3] = this.todo$.subscribe(todo => {
      this.todo.push(todo);
    })
    this.subscribtion[4] = this.getTodo$.subscribe(todo => {
      this.todo = todo;
      console.log(this.todo);
    })
  }
  ngOnInit() {
     this.ta.getTodo(this.user._id);
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
