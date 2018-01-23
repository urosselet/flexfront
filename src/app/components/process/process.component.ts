import { Component, ViewEncapsulation, OnInit, ViewChild, Renderer }                from '@angular/core';
import { ActivatedRoute }                                                           from '@angular/router';

import { BoxLayoutDirective }                                                       from '../../directives/boxlayout.directive';
import { SlidePushDirective }                                                       from '../../directives/slide-push.directive';

import { SearchService }                                                            from '../../services/search.service';
import { CSProcessService }                                                         from '../../services/csprocess.service';

@Component({
    selector: 'fc-process',
    templateUrl: 'process.component.html',
    styleUrls: ['process.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '(window:scroll)': 'updateHeader($event)'
    }
})

export class ProcessComponent implements OnInit {

    @ViewChild(BoxLayoutDirective) boxLayout: BoxLayoutDirective;
    @ViewChild(SlidePushDirective) slidePush: SlidePushDirective;

    private isScrolled = false;
    private currPos: Number = 0;
    private startPos: Number = 0;
    private changePos: Number = 50;

    private sessionId: string = localStorage.getItem('currentSession');
    private targetPlatform: EventTarget;

    public assetUrl: string = process.env.ASSET_URL;

    public isCompleted: boolean = false;
    public query: string;
    public category: string;
    public hidePlatformDetail: boolean = true;
    public results: any;
    public platform: any;
    public csactivities: any[] = [];
    
    public activitiesStatus: any[] = [];
    public attributesArray: any[] = [];
    public selectedCardsArray: any[] = [];
    public quadrants: any[] = [];
    public sessionData: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private renderer: Renderer,
        private searchService: SearchService,
        private csProcessService: CSProcessService
    ) { }

    public ngOnInit(): void {

        this.route.data.subscribe(resolved => {
            this.csactivities = resolved.csactivities.activities;
            this.sessionData = resolved.csactivities.sessionData;
            this.processActivities();
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

    private unsetActivePlatform(): void {
        this.renderer.setElementClass(this.targetPlatform, 'active-platform', false);
    }

    public getPlatformDetail(id: number, event: Event): void {

        if (this.targetPlatform) {
            this.unsetActivePlatform();
        }

        this.targetPlatform = event.target;
        this.renderer.setElementClass(this.targetPlatform, 'active-platform', true);
        this.slidePush.open();

        this.searchService.getPlatform(id)
            .subscribe(
                (res) => { 
                    this.platform = res;
                    this.platform.platform_img_url = this.assetUrl + this.platform.platform_img_url;
                },
                (error) => {});
    }

    public closeDetail(): void {
        this.renderer.setElementClass(this.targetPlatform, 'active-platform', false);
        this.slidePush.close();
    }

    public activityCompleted(event: any): void {
        this.boxLayout.activateBox(event);
    }

    public filterPlatform(data: any): void {
        // this.sessionData = this.csactivities;
        this.searchService.getPlatforms(this.sessionId, this.sessionData)
            .subscribe(
                (res) => { this.results = res.results; },
                (error) => {});
    }

    private processActivities(): void {
        this.csactivities.forEach((item, index) => {
            let activity = { 'index': index, 'actitity': 'activity_' + index, 'isCompleted': false };
            if (index === 0) {
                activity['state'] = 'active';
            } else {
                activity['state'] = 'not-active';
            }
            this.activitiesStatus.push(activity);
            if (this.activitiesStatus.length === 3) {
                this.isCompleted = true;
            }
        });
    }

    /**
     * Show header on scrolling
     * @param {[type]} evt [description]
     */
    public updateHeader(evt): void {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if (this.currPos >= this.changePos) {
            this.isScrolled = true;
        } else {
            this.isScrolled = false;
        }
    }

}
