import { Component, ViewEncapsulation, OnInit, ViewChild }                          from '@angular/core';
import { ActivatedRoute }                                                           from '@angular/router';

import { BoxLayoutDirective }                                                       from '../../directives/boxlayout.directive';

import { SearchService }                                                            from '../../services/search.service';
import { CSProcessService }                                                         from '../../services/csprocess.service';

@Component({
    selector: 'fc-process',
    templateUrl: 'process.component.html',
    styleUrls: ['process.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ProcessComponent implements OnInit {

    @ViewChild(BoxLayoutDirective) boxLayout: BoxLayoutDirective;

    public query: string;
    public category: string;
    public results: any;
    public platform: any;
    public csactivities: any[] = [];
    public activitiesStatus: any[] = [];
    public attributesArray: any[] = [];
    public selectedCardsArray: any[] = [];

    public quadrants: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private searchService: SearchService,
        private csProcessService: CSProcessService
    ) { }

    public ngOnInit(): void {

        this.route.data.subscribe(resolved => {

            this.csactivities = resolved.csactivities;

            this.csactivities.forEach((item, index) => {

                let activity = { 'index': index, 'actitity': 'activity_' + index, 'isCompleted': false };

                if (index === 0) {
                    activity['state'] = 'active';
                } else {
                    activity['state'] = 'not-active';
                }

                this.activitiesStatus.push(activity);

            });

        });

        this.query = this.searchService.getQuery();
        this.category = this.searchService.getCategory();
        this.results = this.searchService.getResults();

        if (!this.results) {
            this.searchService.query('')
                .subscribe(
                    (res) => { this.results = res.results; },
                    (error) => {});
        }
    }

    public getPlatformDetail(id: number): void {
        this.searchService.getPlatform(id)
            .subscribe(
                (res) => { this.platform = res; },
                (error) => {});
    }

    public activityCompleted(event: any): void {
        this.boxLayout.activateBox(event);
    }

    public filterPlatform(attributes: any): void {
        this.searchService.getPlatforms(attributes)
            .subscribe(
                (res) => { this.results = res.results; },
                (error) => {});
    }

}
