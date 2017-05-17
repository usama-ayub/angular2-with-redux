import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../';

@Injectable()

export class AuthActions {
    static LOGIN: string = 'LOGIN';
    static REGISTER: string = 'REGISTER';

    constructor(
        private ngRedux: NgRedux<IAppState>
    ) { }

    login(credentials: Object): void {
        this.ngRedux.dispatch({
            type: AuthActions.LOGIN,
            payload: credentials
        })
    }
}