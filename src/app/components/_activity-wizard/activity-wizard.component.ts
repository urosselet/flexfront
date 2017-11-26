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
    private formattedArray: any[] = [];

    @Output() change: EventEmitter<number> = new EventEmitter<number>();
    @Output() filter: EventEmitter<any> = new EventEmitter<any>();

    @Input() title;
    @Input() activities;
    @Input() index;
    @Input() activitiesStatus;
    @Input() attributesArray;
    @Input() quadrants;
    @Input() selectedCardsArray;
    @Input() sessionData;
    
    constructor(private csProcessService: CSProcessService) { }

    ngAfterViewInit(): void { }

    /**
     * On finilasing activity last step action
     * @param {number} index [description]
     */
    public finalizeStep(index: number): void {

        this.activitiesStatus[index].isCompleted = true;
        this.activitiesStatus[index].state = 'active';

        this.sessionData.push({ 'activity': this.title, data: this.formattedArray });
        this.quadrants.push(this.activity);
        this.selectedCardsArray[index] = this.selectedCards

        this.change.emit(index);

        this.filter.emit({ 'quadrants': this.quadrants, 'sessionData': this.sessionData });

    }

    /**
     * On card selection action
     * @param {number} activityIndex [description]
     * @param {any}    card          [description]
     */
    public onSelectCard(activityIndex: number, card: any, activityName: string, label: string): void {

        if (!this.selectedCards[activityIndex]) {
            this.selectedCards[activityIndex] = [];
        }

        if (!this.formattedArray[activityName]) {
            this.formattedArray[activityName] = [];
        }

        this.selectedCards[activityIndex] = { 'id': card.id, 'label': label, 'icon': card.icon, 'title': card.title };

        this.formattedArray[activityIndex] = this.selectedCards[activityIndex];

        if (card.cs_initiatives) {
            this.activity[activityIndex] = card.cs_initiatives;
        } else {
            this.activity[activityIndex] = null;
        }

        this.activity = _.without(this.activity, null);
        this.activity = _.without(this.activity, undefined);
        
    }

}
