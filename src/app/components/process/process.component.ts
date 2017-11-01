import { Component, ViewEncapsulation, OnInit }      from '@angular/core';
import { ActivatedRoute }                            from '@angular/router';

import { SearchService }                             from '../../services/search.service';
import { CSProcessService }                          from '../../services/csprocess.service';

@Component({
    selector: 'fc-process',
    templateUrl: 'process.component.html',
    styleUrls: ['process.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ProcessComponent implements OnInit {

    public query: string;
    public category: string;
    public results: any;
    public platform: any;
    public csprocesses: any[] = [];

    public attributes: any = { 'process': {}, 'goal': {}, 'crowd': {}, 'task': {} };

    public goalValueType: string;
    public taskType: string;
    public aggregationOfContributions: string;
    public peerContributionsAccessibility: string;
    public mainMotivationalDriver: string;
    public preselectionOfContributors: string;

    constructor(
        private searchService: SearchService,
        private csProcessService: CSProcessService,
        private route: ActivatedRoute
    ) { }

    public ngOnInit(): void {

        this.route.data.subscribe(resolved => {
            this.csprocesses = resolved.csprocess;
        });

        this.query = this.searchService.getQuery();
        this.category = this.searchService.getCategory();
        this.results = this.searchService.getResults();

        // if (!this.query) { this.router.navigate(['/index']); }
    }

    public handleChange(value: string, key: string, type: string): void {
        this.attributes[type][key] = value;
    }

    public getPlatformDetail(id: number): void {
        this.searchService.getPlatform(id)
            .subscribe(
                (res) => { this.platform = res; },
                (error) => {});
    }

}
