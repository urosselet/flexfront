import { Component, ViewEncapsulation, OnInit }  from 	'@angular/core';

import { SearchService }						 from '../../services/search.service';

@Component({
	selector: 'fc-index',
	templateUrl: 'index.component.html',
	styleUrls: ['index.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class IndexComponent implements OnInit {

	constructor(private searchService: SearchService) { }

	private questions: any[] = [];
	private results: any[] = [];

	ngOnInit(): void {}

	public fullTextInput(q: string): void {
	   	this.searchService.query(q)
			.subscribe(
                res => { this.results = res },
                error => {}
            );
	}

}