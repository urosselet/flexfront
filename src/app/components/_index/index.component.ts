import { Component, ViewEncapsulation, OnInit }  		from '@angular/core';
import { CookieService } 								from 'ngx-cookie';
import { trigger, style, state, animate, transition } 	from '@angular/animations';

import { SearchService }						 		from '../../services/search.service';

@Component({
	selector: 'fc-index',
	templateUrl: 'index.component.html',
	styleUrls: ['index.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class IndexComponent implements OnInit {

	private questions: any[] = [];
	private answers: any[] = [];
	private isFirstQuery: boolean = true;

	private results: any;
	private platform: any;

	constructor(
		private searchService: SearchService,
		private cookieService: CookieService
	) { }

	ngOnInit(): void {}

	public getPlatformDetail(id: number): void {
		this.searchService.getPlatform(id)
			.subscribe(
                res => { this.platform = res },
                error => {}
            );
	}

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
                error => {

                });
	}

}