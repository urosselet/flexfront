import { Component, ViewEncapsulation, AfterViewInit, Input, Output, EventEmitter }      	from '@angular/core';

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

    constructor() { }

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
    public finalizeStep(index: number): void {
        this.activitiesStatus[index].isCompleted = true;
        this.activitiesStatus[index].state = 'active';
        this.change.emit(index);
        this.filter.emit();
    }

    public exitStep(activity: any): void { }

}
