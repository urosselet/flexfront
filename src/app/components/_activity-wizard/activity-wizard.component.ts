import { Component, ViewEncapsulation, AfterViewInit, Input, Output, EventEmitter }      	from '@angular/core';

import * as _ from 'underscore'

@Component({
    selector: 'activity-wizard',
    templateUrl: 'activity-wizard.component.html',
    styleUrls: ['activity-wizard.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ActivityWizardComponent implements AfterViewInit {

    public card: any;

    private activity: any = [];

    @Output() change: EventEmitter<number> = new EventEmitter<number>();
    @Output() filter: EventEmitter<any> = new EventEmitter<any>();

    @Input() quadrants: any[] = [];

    @Input() attributesArray: any[] = [];
    @Input() activities: any[] = [];
    @Input() activitiesStatus: any[] = [];
    @Input() index: number;

    constructor() { }

    ngAfterViewInit(): void { }

    public finalizeStep(index: number): void {

        this.activitiesStatus[index].isCompleted = true;
        this.activitiesStatus[index].state = 'active';

        this.quadrants.push(this.activity);

        this.change.emit(index);

        this.filter.emit(this.quadrants);

    }

    public onSelectCard(activityIndex: number, attributes: any): void {

        if (attributes) {
            this.activity[activityIndex] = attributes;
        } else {
            this.activity[activityIndex] = null;
        }

        this.activity = _.without(this.activity, null);
        this.activity = _.without(this.activity, undefined);
        
    }

}
