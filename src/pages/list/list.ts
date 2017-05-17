import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { select, NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  @select('todos') todos$: Observable<any>;

  todo: any;
  todoObj: any;
  constructor(public navCtrl: NavController, public navParam: NavParams, private ngRedux: NgRedux<IAppState>) {

  }
  ngOnInit() {
    this.todos$
      .subscribe(arg => {
        this.todo = arg;
      });
  }

  addTodo(todo) {
    if (!todo.valid) { return console.log('field form') }
    this.todoObj = {
      todoTask: todo.value,
      isfavourite: false
    }
    this.ngRedux.dispatch({
      type: 'addTodo', payload: this.todoObj
    })
    //todo.value = ' ';
  }

  deleteTodo(index) {
     this.ngRedux.dispatch({
      type: 'deleteTodo', payload: index
    })
  }

  isActive(item) {
    console.log(item)
     this.ngRedux.dispatch({
      type: 'isActiveTodo', payload: item
    })
  }

}
