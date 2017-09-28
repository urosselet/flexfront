import { Component, ViewEncapsulation, OnInit, Input }  	from '@angular/core';
import { Router } 											from '@angular/router';

import { SearchService }						 			from '../../services/search.service';

@Component({
	selector: 'fc-process',
	templateUrl: 'process.component.html',
	styleUrls: ['process.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class ProcessComponent implements OnInit {

	private query: string;
	private category: string;
	private results: any;
	private platform: any;

	private attributes: any = {
		'process': {},
		'goal': {},
		'crowd': {},
		'task': {}
	};

	private goalValueType: string;
	private taskType: string;
	private aggregationOfContributions: string;
	private peerContributionsAccessibility: string;
	private mainMotivationalDriver: string;
	private preselectionOfContributors: string;

	constructor(
		private searchService: SearchService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.query = this.searchService.getQuery();
		this.category = this.searchService.getCategory();
		this.results = this.searchService.getResults();

		if (!this.query) this.router.navigate(['/index']);
	}

	public handleChange(value: string, key: string, type: string): void {
		this.attributes[type][key] = value;
		console.log(this.attributes)
	}

	public getPlatformDetail(id: number): void {
		this.searchService.getPlatform(id)
			.subscribe(
                res => { this.platform = res },
                error => {});
	}

}