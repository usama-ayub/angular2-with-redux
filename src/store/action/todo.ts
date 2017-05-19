import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../';

@Injectable()

export class TodoActions {

    static ADDTODO: string = 'addTodo';
    static ADDTODO_FAIL: string = 'ADDTODO_FAIL';
    static ADDTODO_SUCCESS: string = 'ADDTODO_SUCCESS';

    static DELETETODO: string = 'DELETETODO';
    static DELETETODO_SUCCESS: string = 'DELETETODO_SUCCESS';
    static DELETETODO_FAIL: string = 'DELETETODO_FAIL';

    static FAVOURITETODO: string = 'FAVOURITETODO';
    static FAVOURITETODO_SUCCESS: string = 'FAVOURITETODO_SUCCESS';
    static FAVOURITETODO_FAIL: string = 'FAVOURITETODO_FAIL';




    constructor(
        private ngRedux: NgRedux<IAppState>
    ) { }



    addTodo(credentials: Object): void {
        this.ngRedux.dispatch({
            type: TodoActions.ADDTODO,
            payload: credentials
        });
    }



    deleteTodo(credentials: Object): void {
        this.ngRedux.dispatch({
            type: TodoActions.DELETETODO,
            payload: credentials
        })
    }


    favouriteTodo(credentials: Object): void {
        this.ngRedux.dispatch({
            type: TodoActions.FAVOURITETODO,
            payload: credentials
        })
    }
}
