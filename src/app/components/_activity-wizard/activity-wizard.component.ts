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

    private activity: any[] = [];
    private selectedCards: any[] = [];


    @Output() change: EventEmitter<number> = new EventEmitter<number>();
    @Output() filter: EventEmitter<any> = new EventEmitter<any>();

    @Input() quadrants: any[] = [];
    @Input() selectedCardsArray: any[] = [];
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
        this.selectedCardsArray[index] = this.selectedCards

        this.change.emit(index);

        this.filter.emit(this.quadrants);

        console.log(this.selectedCardsArray)

    }

    /**
     * On card selection action
     * @param {number} activityIndex [description]
     * @param {any}    card          [description]
     */
    public onSelectCard(activityIndex: number, card: any): void {

        if (!this.selectedCards[activityIndex]) {
            this.selectedCards[activityIndex] = [];
        }

        this.selectedCards[activityIndex] = { 'id': card.id, 'icon': card.icon, 'title': card.title };

        if (card.cs_initiatives) {
            this.activity[activityIndex] = card.cs_initiatives;
        } else {
            this.activity[activityIndex] = null;
        }

        this.activity = _.without(this.activity, null);
        this.activity = _.without(this.activity, undefined);
        
    }

}
