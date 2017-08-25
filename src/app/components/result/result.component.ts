import { Component, ViewEncapsulation, OnInit, Input }  from 	'@angular/core';

@Component({
	selector: 'fc-result',
	templateUrl: 'result.component.html',
	styleUrls: ['result.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class ResultComponent implements OnInit {

	@Input() results: any[];

	constructor() {}

	ngOnInit(): void {}

}