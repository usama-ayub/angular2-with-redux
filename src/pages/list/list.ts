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
  @select(['todo', 'delTodo']) delTodo$: Observable<any>;
  subscribtion: Subscription[] = [];
  user: any;
  //todo = [];
  todos = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public hs: HelperService,
    public ta: TodoActions,
  ) {

    this.subscribtion[0] = this.user$.subscribe(user => {
      if (user) return this.user = user
      this.user = JSON.parse(localStorage.getItem('user'));
    })

    this.subscribtion[1] = this.getTodo$.subscribe(todo => {
      this.todos = todo;
    })
    this.subscribtion[2] = this.isLoading$.subscribe(res => {
      if (res) return this.hs.presentLoading(false);
      this.hs.dismissLoading();
    });
    this.subscribtion[3] = this.success$.subscribe(res => {
      console.log(res);
    })

    this.subscribtion[4] = this.todo$.subscribe(todo => {
      this.todos.push(todo);
    })
    this.subscribtion[4] = this.delTodo$.subscribe(deltodo => {
      console.log(deltodo);
    })
  }
  
  ngOnInit() {
    this.ta.getTodo(this.user._id);
  }

  addTodo(item) {
    console.log(item)
    if (!item.valid) {
      return this.hs.presentToast('input field incomplete');
    }
    let obj = {
      createBy: this.user._id,
      description: item.value.item
    }
    this.ta.addTodo(obj);
  }

  deleteTodo(list, index) {
    this.todos.splice(index, 1);
    this.ta.deleteTodo(list._id);
  }

}
