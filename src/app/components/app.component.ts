import { Component, Input, Output, ViewEncapsulation, OnInit }  	from '@angular/core';
import { MnFullpageOptions, MnFullpageService } 					from 'ngx-fullpage/index';

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
        scrollingSpeed: 1000,
        menu: '.start-chat-btn',
        anchors: ['start']
    });

	constructor() { }

	ngOnInit(): void { }

}