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

	constructor(
		private searchService: SearchService,
		private cookieService: CookieService
	) {}

	ngOnInit(): void {
		console.log(this.cookieService.getAll())
	}

	public fullTextInput(q: string): void {

	   	this.searchService.query(q)
			.subscribe(
                res => {
                	this.results = res.results;
                	setTimeout(() => {
			    		this.answers.push(res.answer);
			  		}, 1000);
                },
                error => {}
            );

	}

}