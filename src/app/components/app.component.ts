import { Component, Input, ViewEncapsulation, OnInit, ViewChild }   from '@angular/core';
import { Observable }                                               from 'rxjs/Observable';

import { IndexComponent }                                           from '../components/index/index.component';

import { SearchService }                                            from '../services/search.service';

import { slideInOutAnimation }                                      from '../directives/router.transition';

import * as jQuery                                                  from 'jquery';

import 'fullpage.js';

@Component({
    selector: 'fc-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    animations: [ slideInOutAnimation ],
    host: { '[@slideInOutAnimation]': '' },
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {


    @ViewChild(IndexComponent) private indexComponent: IndexComponent;

    private query: string;
    private category: string;

    constructor(
        private searchService: SearchService
    ) {}

    public ngOnInit(): void {}

    private observableSource(query: any): Observable<any[]> {
        return this.searchService.autocomplete(query);
    }

    private getState(outlet) {
        return outlet.activatedRouteData.state;
    }

}
