import { Component, ViewEncapsulation, OnInit, Output, Input, EventEmitter }  	from  '@angular/core';

import { SearchService }						 								from '../../services/search.service';

@Component({
	selector: 'fc-process',
	templateUrl: 'process.component.html',
	styleUrls: ['process.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class ProcessComponent implements OnInit {

	@Input() query: string;
	@Input() category: string;

	constructor(private searchService: SearchService) {}

	ngOnInit(): void {}

}