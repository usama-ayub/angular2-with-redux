import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { combineReducers } from 'redux';
import { todoReducers } from './reducers/todo';
import { AuthActions } from './actions';

export { Observable, Subscription, BehaviorSubject, Subject } from 'rxjs';
export { select, NgRedux } from 'ng2-redux';
export { bindActionCreators } from 'redux';
export { AuthActions } from './actions';
export interface IAppState {
    todos: [any]
}
const AppReducer = combineReducers<IAppState>({
    todos: todoReducers
})
@NgModule({
    imports: [
        NgReduxModule
    ],
    providers: [
        AuthActions
    ]
})

export class StoreModule {
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private devTool: DevToolsExtension,

    ) {
        const middleware = [
        ];
        this.ngRedux.configureStore(
            AppReducer,
            <any>{}, // Defailt State
            middleware, // Middlewares
            [devTool.isEnabled() ? devTool.enhancer() : f => f] // Enhancers
        )
    }
}