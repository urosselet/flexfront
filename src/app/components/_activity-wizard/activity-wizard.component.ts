import { Component, ViewEncapsulation, AfterViewInit, Input, Output, EventEmitter }      	from '@angular/core';

import { MatSnackBar }                                                                      from '@angular/material';

@Component({
    selector: 'activity-wizard',
    templateUrl: 'activity-wizard.component.html',
    styleUrls: ['activity-wizard.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ActivityWizardComponent implements AfterViewInit {

    private selectedCards: any[] = [];
    private formattedArray: any[] = [];

    @Output() change: EventEmitter<number> = new EventEmitter<number>();
    @Output() filter: EventEmitter<any> = new EventEmitter<any>();

    @Input() title;
    @Input() summary;
    @Input() activities;
    @Input() activity;
    @Input() index;
    @Input() activitiesStatus;
    @Input() attributesArray;
    @Input() sessionData;
    @Input() isMultipleChoice;

    constructor(public snackBar: MatSnackBar) { }

    ngAfterViewInit(): void {

        if (!this.sessionData[this.index]) {
            this.sessionData.push(this.activity);
        }

        this.sessionData[this.index].activities.forEach((activity, index) => {
            activity.label.default.cards.default.forEach((card, index) => {
                if (card.is_selected === undefined) {
                    card.is_selected = false;
                }
            });
        });

    }

    /**
     * On finalising current activity last step action
     * @param {number} index [description]
     */
    public finalizeStep(index: number, activityIndex: number): void {

        let temp = [];

        this.sessionData[index].activities.forEach((activity, actIndex) => {
            activity.label.default.cards.default.forEach((card, index) => {
                temp.push(card.is_selected);
            });
        });

        this.openSnackBar(index, activityIndex);

        this.activitiesStatus[index].isCompleted = true;
        this.activitiesStatus[index].state = 'active';

        this.change.emit(index);
        this.filter.emit();

    }

    public openSnackBar(index: number, activityIndex: number): void {

        let temp = [];

        this.sessionData[index].activities[activityIndex].label.default.cards.default.forEach((card, index) => {
            temp.push(card.is_selected);
        });

        if (!temp.some(Boolean)) {
            this.snackBar.open('It seems you have not picked a card! It\'s fine with us, you can come by later on and make your choice.', 'OK');
        } else {
            this.snackBar.dismiss();
        }
    }

    /**
     * Apply filter on card selection
     */
    public applyFilter(): void {
        this.filter.emit();
    }

    public exitStep(activity: any): void { }

}
