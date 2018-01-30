import { Component, ViewEncapsulation, OnInit, Input }      from '@angular/core';
import { Router }                                           from '@angular/router';

import { Observable }                                       from 'rxjs/Observable';

import { SearchService }                                    from '../../services/search.service';

import * as uuid                                            from 'uuid/v4';

@Component({
    selector: 'fc-index',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class IndexComponent {

    @Input() public query: string;
    @Input() public category: string;

    private questions: any[] = [];
    private answers: any[] = [];
    private isFirstQuery: boolean = true;
    private session: string;

    private results: any;
    private platform: any;

    constructor(
        private searchService: SearchService,
        private router: Router
    ) {

        if (localStorage.getItem('currentSession') === null) {
            this.session = uuid();
            localStorage.setItem('currentSession', this.session);
        } else {
            this.session = localStorage.getItem('currentSession');
        }
    }

    public observableSource(query: any): Observable<any[]> {
        return this.searchService.autocomplete(query);
    }

    public getPlatformDetail(id: number): void {
        this.searchService.getPlatform(id)
            .subscribe((res) => { this.platform = res; });
    }

    public fullTextInput(q: string): void {
        this.searchService.query(q)
            .subscribe(
                (res) => {
                    this.results = res.results;
                    this.isFirstQuery = false;
                    setTimeout(() => {
                        this.answers.push(res.q);
                    }, 1000);
                });
    }

    public search(): void {
        this.searchService.query(this.query)
            .subscribe(
                (res) => {
                    this.category = res.cat;
                    this.router.navigate(['/process', this.session ]);
                });
    }

}
