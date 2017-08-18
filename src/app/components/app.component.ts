import { Component, ViewEncapsulation, OnInit }  from 	'@angular/core';

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