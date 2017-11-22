import { Component, ViewEncapsulation, AfterViewInit, Input, Output, EventEmitter }      	from '@angular/core';

import { CSProcessService }                                                                 from '../../services/csprocess.service';

import * as _ from 'underscore'

@Component({
    selector: 'activity-wizard',
    templateUrl: 'activity-wizard.component.html',
    styleUrls: ['activity-wizard.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ActivityWizardComponent implements AfterViewInit {

    public card: any;

    private activity: any[] = [];

    private selectedCardsArray: any[] = [];

    @Output() change: EventEmitter<number> = new EventEmitter<number>();
    @Output() filter: EventEmitter<any> = new EventEmitter<any>();

    @Input() quadrants: any[] = [];

    @Input() attributesArray: any[] = [];
    @Input() activities: any[] = [];
    @Input() activitiesStatus: any[] = [];
    @Input() index: number;

    constructor(private csProcessService: CSProcessService) { }

    ngAfterViewInit(): void { }

    /**
     * On finilasing activity last step action
     * @param {number} index [description]
     */
    public finalizeStep(index: number): void {

        this.activitiesStatus[index].isCompleted = true;
        this.activitiesStatus[index].state = 'active';

        this.quadrants.push(this.activity);

        this.change.emit(index);

        this.filter.emit(this.quadrants);

    }

    /**
     * On card selection action
     * @param {number} activityIndex [description]
     * @param {any}    card          [description]
     */
    public onSelectCard(activityIndex: number, card: any): void {

        if (!this.selectedCardsArray[activityIndex]) {
            this.selectedCardsArray[activityIndex] = [];
        }

        this.selectedCardsArray[activityIndex].push({ 'icon': card.icon, 'title': card.title });

        console.log(this.selectedCardsArray);

        if (card.cs_initiatives) {
            this.activity[activityIndex] = card.cs_initiatives;
        } else {
            this.activity[activityIndex] = null;
        }

        this.activity = _.without(this.activity, null);
        this.activity = _.without(this.activity, undefined);
        
    }

}
