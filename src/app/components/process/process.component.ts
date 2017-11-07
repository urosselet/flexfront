import { Component, ViewEncapsulation, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute }                            from '@angular/router';

import { SwiperComponent, SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';

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

    @ViewChild(SwiperDirective) swiper: SwiperDirective;

    public config: SwiperConfigInterface = {
        mousewheelControl: false,
        scrollbarDraggable: false,
        noSwiping: true,
        simulateTouch: false,
        effect: 'flip'
    };

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
