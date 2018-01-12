import { Component, ViewEncapsulation, OnInit, ViewChild, Renderer }                from '@angular/core';
import { ActivatedRoute }                                                           from '@angular/router';

@Component({
    selector: 'fc-about-services',
    templateUrl: 'about-services.component.html',
    styleUrls: ['about-services.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AboutServicesComponent implements OnInit {

    constructor(
        private route: ActivatedRoute
    ) { }

    public ngOnInit(): void {}

}
