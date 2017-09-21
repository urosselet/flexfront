import { Component, Input, Output, ViewEncapsulation, OnInit }  	from '@angular/core';
import { Observable }                                               from 'rxjs/Observable';
import { MnFullpageOptions, MnFullpageService } 					from 'ngx-fullpage/index';

import { SearchService }                                            from '../services/search.service';

import * as jQuery													from 'jquery';

import 'fullpage.js';

@Component({
	selector: 'fc-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

	@Input() public options: MnFullpageOptions = new MnFullpageOptions({
        controlArrows: false,
        keyboardScrolling: false,
        setAllowScrolling: false,
        onLeave: ((index: number, nextIndex: number, direction: string) => {
        	if (direction === 'down') {
        		setTimeout(function() {
        			jQuery('header').addClass('show-header');
        		}, 600);
        	} else if (direction === 'up') {
        		jQuery('header').removeClass('show-header');
        	}
        })
    });

    private query: string;

	constructor(
        private fullpageService: MnFullpageService,
		private searchService: SearchService
	) {}

	ngOnInit(): void {}

    observableSource(query: any): Observable<any[]> {
        return this.searchService.autocomplete(query);
    }

    public search(q: string): void {
           this.searchService.query(q, true)
            .subscribe(
                res => {},
                error => {});
    }

}