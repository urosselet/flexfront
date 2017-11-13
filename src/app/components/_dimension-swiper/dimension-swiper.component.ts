import { Component, ViewEncapsulation, AfterViewInit, Input, ViewChild }      	from '@angular/core';

import { SwiperDirective, SwiperConfigInterface }           			from 'ngx-swiper-wrapper';


@Component({
    selector: 'dimension-swiper',
    templateUrl: 'dimension-swiper.component.html',
    styleUrls: ['dimension-swiper.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class DimensionSwiperComponent implements AfterViewInit {

    @Input() activities: any = []; 

	@ViewChild(SwiperDirective) swiper: SwiperDirective;

    public config: SwiperConfigInterface = {
        noSwiping: true,
        simulateTouch: true,
        slidesPerColumnFill: 'row',
        setWrapperSize: true
    };

    constructor() { }

    ngAfterViewInit(): void { console.log(this.activities) }

}
