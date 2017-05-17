import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { combineReducers } from 'redux';
import { todoReducers } from './reducers/todo'
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