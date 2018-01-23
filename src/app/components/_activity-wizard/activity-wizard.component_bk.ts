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
    @Input() summary;
    @Input() activities;
    @Input() index;
    @Input() activitiesStatus;
    @Input() attributesArray;
    @Input() quadrants;
    @Input() selectedCardsArray;
    @Input() sessionData;
    @Input() isMultipleChoice;
    
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
    public onSelectCard(activityIndex: number, card: any, activityName: string, label: string, summary: string, isMultipleChoice: boolean): void {

        let obj = { 'id': card.id, 'label': label, 'summary': summary, 'icon': card.icon, 'title': card.title, 'todos': card.todos };

        if (!this.formattedArray[activityName]) {
            this.formattedArray[activityName] = [];
        }

        if (card.cs_initiatives) {
            obj['filter'] = card.cs_initiatives;
        }

        if (!this.selectedCards[activityIndex]) {
            this.selectedCards[activityIndex] = [];
            this.selectedCards[activityIndex].push(obj);
        } else {

            if (this.selectedCards[activityIndex].length !== 0) {

                this.selectedCards[activityIndex].forEach((item, index) => {
                    if (item.id === card.id) {
                        this.selectedCards[activityIndex].splice(index, 1);
                    } else if (item.id !== card.id) {
                        this.selectedCards[activityIndex].push(obj);
                    }
                    console.log(this.selectedCards[activityIndex])
                });

            } else {
                this.selectedCards[activityIndex].push(obj);
            }
        }

        this.formattedArray[activityIndex] = this.selectedCards[activityIndex];

        if (!this.activity[activityName]) {
            this.activity[activityName] = [];
        }

        this.activity[activityName].push(this.formattedArray[activityIndex]);

        console.log('4', this.activity)
        
    }

}
