import { Component, ViewEncapsulation, OnInit, Output, Input, EventEmitter }    from  '@angular/core';

import { SearchService }                                                        from '../../services/search.service';

@Component({
    selector: 'fc-result',
    templateUrl: 'result.component.html',
    styleUrls: ['result.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ResultComponent implements OnInit {

    @Input() public results: any;

    @Output() public someEvent = new EventEmitter<number>();

    constructor(private searchService: SearchService) {}

    public ngOnInit(): void {}

    public callParent(id: number) {
        this.someEvent.next(id);
    }

}
