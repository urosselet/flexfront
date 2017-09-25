import { Component, ViewEncapsulation, OnInit, Input }  	from '@angular/core';
import { Router } 											from '@angular/router';

import { Observable }                                       from 'rxjs/Observable';

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
		private cookieService: CookieService,
		private router: Router
	) { }

	ngOnInit(): void {}

	private observableSource(query: any): Observable<any[]> {
    	return this.searchService.autocomplete(query);
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

	public search(): void {
        this.searchService.query(this.query)
            .subscribe(
                res => {
                    this.category = res.cat;
                    this.router.navigate(['/process/']);
                    //this.fullpageService.moveSectionDown();
                },
                error => {});
    }

}