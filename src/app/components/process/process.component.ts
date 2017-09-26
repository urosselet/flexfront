import { Component, ViewEncapsulation, OnInit, Output, Input, EventEmitter }  	from  '@angular/core';

import { SearchService }						 								from '../../services/search.service';

@Component({
	selector: 'fc-process',
	templateUrl: 'process.component.html',
	styleUrls: ['process.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class ProcessComponent implements OnInit {

	private query: string;
	private category: string;

	constructor(private searchService: SearchService) {}

	ngOnInit(): void {
		this.query = this.searchService.getQuery();
		this.category = this.searchService.getCategory();
	}

}