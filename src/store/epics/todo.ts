
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';

import { TodoActions } from '../action';
import { HttpService } from './../services/http';
import { api } from './api';

@Injectable()
export class TodoEpics {
    constructor(private hs: HttpService) { }

    addTodo = (action$: ActionsObservable<any>) =>
        action$.ofType(TodoActions.ADDTODO)
            .switchMap(({ payload }) => {
                return this.hs.PostRequest(api.addTodo, payload)
                    .switchMap(result => {
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


    deleteTodo = (action$: ActionsObservable<any>) =>
        action$.ofType(TodoActions.DELETETODO)
            .switchMap(({ payload }) => {
                return this.hs.PostRequest(api.deleteTodo, payload)
                    .switchMap(result => {
                        if (result.success) {
                            return Observable.concat(
                                Observable.of({
                                    type: TodoActions.DELETETODO_SUCCESS,
                                    payload: <any>result
                                })
                            )
                        } else {
                            return Observable.concat(
                                Observable.of({
                                    type: TodoActions.DELETETODO_FAIL,
                                    payload: <any>result.error
                                })
                            )
                        }
                    })
                    .catch(error =>
                        Observable.concat(
                            Observable.of({
                                type: TodoActions.DELETETODO_FAIL,
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
                            return Observable.concat(
                                Observable.of({
                                    type: TodoActions.FAVOURITETODO_SUCCESS,
                                    payload: <any>result
                                })
                            )
                        } else {
                            return Observable.concat(
                                Observable.of({
                                    type: TodoActions.FAVOURITETODO_FAIL,
                                    payload: <any>result.error
                                })
                            )
                        }
                    })
                    .catch(error =>
                        Observable.concat(
                            Observable.of({
                                type: TodoActions.FAVOURITETODO_FAIL,
                                payload: <any>'Error: ' + error
                            })
                        )
                    )
            });

}