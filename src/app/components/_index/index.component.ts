import { Component, ViewEncapsulation, OnInit, Input }  	from '@angular/core';
import { CookieService } 									from 'ngx-cookie';
import { MnFullpageOptions, MnFullpageService } 			from 'ngx-fullpage/index';

import { SearchService }						 			from '../../services/search.service';

@Component({
	selector: 'fc-index',
	templateUrl: 'index.component.html',
	styleUrls: ['index.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class IndexComponent implements OnInit {

	@Input() query: string;
	@Input() category: string;

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

	public test(): void {
		console.log('hello');
	}

	public getPlatformDetail(id: number): void {
		this.searchService.getPlatform(id)
			.subscribe(
                res => { this.platform = res },
                error => {}
            );
	}

	public fullTextInput(q: string): void {
	   	this.searchService.query(q)
			.subscribe(
                res => {
                	this.results = res.results;
                	this.isFirstQuery = false;
                	setTimeout(() => {
			    		this.answers.push(res.q);
			  		}, 1000);
                },
                error => {});
	}

}