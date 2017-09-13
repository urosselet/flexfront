import { Component, ViewEncapsulation, OnInit }  		from '@angular/core';
import { CookieService } 								from 'ngx-cookie';
import { trigger, style, state, animate, transition } 	from '@angular/animations';

import { SearchService }						 		from '../../services/search.service';

@Component({
	selector: 'fc-index',
	templateUrl: 'index.component.html',
	styleUrls: ['index.component.scss'],
	encapsulation: ViewEncapsulation.None,
	animations: [
		trigger('slide', [
      		state('in', style({
      			transform: 'translateX(0)',
      			display: 'none'
      		})),
	      	state('out', style({
		      	transform: 'translateX(200px)'
	      	})),
		    transition('in => out', animate('500ms ease-in-out')),
		    transition('out => in', animate('500ms ease-in-out'))
	    ]),
	    trigger('slideMain', [
      		state('in', style({
      			transform: 'translateX(0)'
      		})),
	      	state('out', style({
		      	transform: 'translateX(-400px)'
	      	})),
		    transition('in => out', animate('500ms ease-in-out')),
		    transition('out => in', animate('500ms ease-in-out'))
	    ]),
	]
})

export class IndexComponent implements OnInit {

	private questions: any[] = [];
	private answers: any[] = [];
	private results: any[] = [];
	private isFirstQuery: boolean = true;

	private slideState: string = 'in';

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

	private toggleSlide(): void {
		this.slideState = this.slideState === 'out' ? 'in' : 'out';
  	}

}