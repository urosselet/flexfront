import { Component, Input, Output, ViewEncapsulation, OnInit }  	from '@angular/core';

import { MnFullpageOptions, MnFullpageService } 					from 'ngx-fullpage/index';

import * as jQuery													from 'jquery';

import 'iscroll';
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
        // scrollOverflow: true,
        keyboardScrolling: false,
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

	constructor(
		private fullpageService: MnFullpageService
	) {}

	ngOnInit(): void { }

}