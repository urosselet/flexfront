import { Component, ViewEncapsulation, AfterViewInit, Input, ViewChild }      	from '@angular/core';

import * as _ from 'underscore'

@Component({
    selector: 'activity-wizard',
    templateUrl: 'activity-wizard.component.html',
    styleUrls: ['activity-wizard.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ActivityWizardComponent implements AfterViewInit {

    public card: any;

    private allActivities: any = [];

    @Input() attributesArray: any[] = [];
    @Input() activities: any[] = [];
    @Input() activitiesStatus: any[] = [];
    @Input() index: number;

    constructor() { }

    ngAfterViewInit(): void { }

    public finalizeStep(index: number): void {
        this.activitiesStatus[index].isCompleted = true;
        this.activitiesStatus[index].state = 'active';
    }

    public onSelectCard(activityIndex: number, attributes: any): void {

        /* if (attributes) {
            this.allActivities[this.index][activityIndex] = attributes;
        } else {
            this.allActivities[this.index][activityIndex] = null;
        }*/

    }

}
