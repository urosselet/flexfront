import { Component, Input, ViewEncapsulation, OnInit }   from '@angular/core';

@Component({
    selector: 'fc-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

    private query: string;
    private category: string;

    constructor() {}

    public ngOnInit(): void {}

}
