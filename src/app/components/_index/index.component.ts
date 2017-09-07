import { Component, ViewEncapsulation, OnInit }  	from '@angular/core';
import { CookieService } 							from 'ngx-cookie';
import { SearchService }						 	from '../../services/search.service';

@Component({
	selector: 'fc-index',
	templateUrl: 'index.component.html',
	styleUrls: ['index.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class IndexComponent implements OnInit {

	private questions: any[] = [];
	private answers: any[] = [];
	private results: any[] = [];
	private isFirstQuery: boolean = true

	constructor(
		private searchService: SearchService,
		private cookieService: CookieService
	) {}

	ngOnInit(): void {}

	public fullTextInput(q: string): void {

	   	this.searchService.query(q, this.isFirstQuery)
			.subscribe(
                res => {
                	this.results = res.results;
                	this.isFirstQuery = false;
                	setTimeout(() => {
			    		this.answers.push(res);
			  		}, 1000);
                },
                error => {}
            );

	}

}