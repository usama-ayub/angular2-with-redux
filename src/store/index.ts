import 'redux/dist/redux';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineReducers } from 'redux';

import { AuthActions } from './action/auth';
import { TodoActions } from './action/todo';

import { AuthReducer, IAuthState } from './reducers/auth';
import { TodoReducer } from './reducers/todo';

import { AuthEpics } from './epics/auth';
import { TodoEpics } from './epics/todo'

import { HttpService } from './services/http';
import { HelperService } from './services/helper';

export { Observable, Subscription, BehaviorSubject, Subject } from 'rxjs';
export { select, NgRedux } from 'ng2-redux';
export { bindActionCreators } from 'redux';
export { AuthActions } from './action/auth';
export { TodoActions } from './action/todo';
export { AuthReducer, IAuthState } from './reducers/auth';
export { HttpService } from './services/http';
export { HelperService } from './services/helper';
export { api } from './epics/api';

export interface IAppState {
    auth?: IAuthState,
}

const AppReducer = combineReducers({
    auth: AuthReducer,
    todo: TodoReducer,
})
@NgModule({
    imports: [
        NgReduxModule
    ],
    providers: [
        AuthActions, TodoActions,
        AuthEpics, TodoEpics,
        HttpService, HelperService
    ]
})

export class StoreModule {
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private devTool: DevToolsExtension,
        private ae: AuthEpics,
        private at: TodoEpics
    ) {
        const middleware = [
            createEpicMiddleware(this.ae.login),
        ];
        this.ngRedux.configureStore(
            AppReducer,
            <any>{}, // Defailt State
            middleware, // Middlewares
            [devTool.isEnabled() ? devTool.enhancer() : f => f] // Enhancers
        )
    }
}