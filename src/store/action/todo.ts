import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../';

@Injectable()

export class TodoActions {

    static GETTODO: string = 'GETTODO';
    static GETTODO_SUCCESS: string = 'GETTODO_SUCCESS';
    static GETTODO_FAIL: string = 'GETTODO_FAIL';

    static ADDTODO: string = 'ADDTODO';
    static ADDTODO_SUCCESS: string = 'ADDTODO_SUCCESS';
    static ADDTODO_FAIL: string = 'ADDTODO_FAIL';

    static DELETETODO: string = 'DELETETODO';
    static DELETETODO_SUCCESS: string = 'DELETETODO_SUCCESS';
    static DELETETODO_FAIL: string = 'DELETETODO_FAIL';

    static FAVOURITETODO: string = 'FAVOURITETODO';
    static FAVOURITETODO_SUCCESS: string = 'FAVOURITETODO_SUCCESS';
    static FAVOURITETODO_FAIL: string = 'FAVOURITETODO_FAIL';



    constructor(
        private ngRedux: NgRedux<IAppState>
    ) { }

    getTodo(credentials: any): void {
        this.ngRedux.dispatch({
            type: TodoActions.GETTODO,
            payload: credentials
        });
    }
    addTodo(credentials: Object): void {
        this.ngRedux.dispatch({
            type: TodoActions.ADDTODO,
            payload: credentials
        });
    }
    updateTodo(credentials: Object): void {
        this.ngRedux.dispatch({
            type: TodoActions.FAVOURITETODO,
            payload: credentials
        })
    }
    deleteTodo(credentials): void {
        this.ngRedux.dispatch({
            type: TodoActions.DELETETODO,
            payload: credentials
        })
    }
}