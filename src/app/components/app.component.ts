import { Component, ViewEncapsulation, OnInit }  	from '@angular/core';

import * as jQuery									from 'jquery';

import 'fullpage.js';

@Component({
	selector: 'fc-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

}