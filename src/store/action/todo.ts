import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../';

@Injectable()
export class todoActions {

    constructor(
        private ngRedux: NgRedux<IAppState>
    ) { }
}