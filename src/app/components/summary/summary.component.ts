import { Component, ViewEncapsulation, OnInit, Input }      from '@angular/core';
import { Router }                                           from '@angular/router';

import { SessionService }                                 	from '../../services/session.service';

@Component({
    selector: 'fc-summary',
    templateUrl: 'summary.component.html',
    styleUrls: ['summary.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class SummaryComponent implements OnInit {

	public summaries: any[] = [];

    constructor(
        private router: Router,
        private sessionService: SessionService
    ) { }

    public ngOnInit(): void {
    	this.sessionService.getSessionData()
            .subscribe(
                (res) => { this.summaries = res.data; },
                (error) => {});
    }

}
