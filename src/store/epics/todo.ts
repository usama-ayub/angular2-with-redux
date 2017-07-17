
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';

import { HttpService } from './../services/http';
import { TodoActions } from './../action/todo';
import { api } from './api';

@Injectable()
export class TodoEpics {
    constructor(private hs: HttpService) { }
    getTodo = (action$: ActionsObservable<any>) =>
        action$.ofType(TodoActions.GETTODO)
            .switchMap(({ payload }) => {
                return this.hs.GetRequest(`${api.getTodo}/${payload}`)
                    .switchMap(result => {
                        if (result.success) {
                            return Observable.concat(
                                Observable.of({
                                    type: TodoActions.GETTODO_SUCCESS,
                                    payload: <any>result
                                })
                            )
                        } else {
                            return Observable.concat(
                                Observable.of({
                                    type: TodoActions.GETTODO_FAIL,
                                    payload: <any>result.error
                                })
                            )
                        }
                    })
                    .catch(error =>
                        Observable.concat(
                            Observable.of({
                                type: TodoActions.GETTODO_FAIL,
                                payload: <any>'Error: ' + error
                            })
                        )
                    )
            });

    addTodo = (action$: ActionsObservable<any>) =>
        action$.ofType(TodoActions.ADDTODO)
            .switchMap(({ payload }) => {
                console.log(payload);
                return this.hs.PostRequest(api.addTodo, payload)
                    .switchMap(result => {
                        console.log('dd');
                        if (result.success) {
                            return Observable.concat(
                                Observable.of({
                                    type: TodoActions.ADDTODO_SUCCESS,
                                    payload: <any>result
                                })
                            )
                        } else {
                            return Observable.concat(
                                Observable.of({
                                    type: TodoActions.ADDTODO_FAIL,
                                    payload: <any>result.error
                                })
                            )
                        }
                    })
                    .catch(error =>
                        Observable.concat(
                            Observable.of({
                                type: TodoActions.ADDTODO_FAIL,
                                payload: <any>'Error: ' + error
                            })
                        )
                    )
            });

    favouriteTodo = (action$: ActionsObservable<any>) =>
        action$.ofType(TodoActions.FAVOURITETODO)
            .switchMap(({ payload }) => {
                return this.hs.PostRequest(api.favouriteTodo, payload)
                    .switchMap(result => {
                        if (result.success) {
                            return Observable.of({
                                type: TodoActions.FAVOURITETODO_SUCCESS,
                                payload: <any>result
                            })
                        } else {
                            return Observable.of({
                                type: TodoActions.FAVOURITETODO_FAIL,
                                payload: <any>result
                            })
                        }
                    })
                    .catch(error => Observable.of({
                        type: TodoActions.FAVOURITETODO_FAIL,
                        payload: <any>'Error: ' + JSON.stringify(error)
                    }))
            });

    deleteTodo = (action$: ActionsObservable<any>) =>
        action$.ofType(TodoActions.DELETETODO)
            .switchMap(({ payload }) => {
                return this.hs.PostRequest(api.deleteTodo, payload)
                    .switchMap(result => {
                        if (result.success) {
                            return Observable.of({
                                type: TodoActions.DELETETODO_SUCCESS,
                                payload: <any>result
                            })
                        } else {
                            return Observable.of({
                                type: TodoActions.DELETETODO_FAIL,
                                payload: <any>result
                            })
                        }
                    })
                    .catch(error => Observable.of({
                        type: TodoActions.DELETETODO_FAIL,
                        payload: <any>'Error: ' + JSON.stringify(error)
                    }))
            });
}