import 'redux/dist/redux';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineReducers } from 'redux';

import { AuthActions } from './action/auth';
import { AuthReducer, IAuthState } from './reducers/auth';
import { AuthEpics } from './epics/auth';

export interface IAppState {
   auth?: IAuthState
}

const AppReducer = combineReducers<IAppState>({
    auth: AuthReducer
})
@NgModule({
    imports: [
        NgReduxModule
    ],
    providers: [
        AuthActions,
        AuthEpics
    ]
})

export class StoreModule {
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private devTool: DevToolsExtension,
        private ae: AuthEpics
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