import { Directive, ElementRef, Renderer, AfterViewInit, NgZone }     from '@angular/core';
import { Observable }                                                 from 'rxjs/Rx';

import * as jQuery                                                    from 'jquery';

@Directive({
    selector: '[slidePush]'
})

export class SlidePushDirective implements AfterViewInit {

    private menuRight: any;
    private showRightPush: any;

    constructor(
        private zone: NgZone,
        private el: ElementRef, 
        private renderer: Renderer
    ) { }

    public ngAfterViewInit() {
        this.zone.run(() => {
            this.menuRight = this.el.nativeElement.querySelector( '#cbp-spmenu-s2' );
            this.showRightPush = this.el.nativeElement.querySelector( '#showRightPush' );
        });
    }

    public open(): void {

        if (!this.showRightPush.classList.contains('active')) {
            this.showRightPush.classList.add( 'active' );
            this.renderer.setElementClass(this.el.nativeElement, 'cbp-spmenu-push-toleft', true);
            this.menuRight.classList.add( 'cbp-spmenu-open' );
        }

    }

    public close(): void {
        this.showRightPush.classList.remove( 'active' );
        this.renderer.setElementClass(this.el.nativeElement, 'cbp-spmenu-push-toleft', false);
        this.menuRight.classList.remove( 'cbp-spmenu-open' );
    }

}
