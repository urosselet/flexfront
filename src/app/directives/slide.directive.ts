import { Directive, ElementRef, Renderer, HostListener, Input }     from '@angular/core';

import * as jQuery                                                  from 'jquery';

@Directive({
    selector: '[slide]'
})

export class SlideDirective {

    constructor(private renderer: Renderer, private el: ElementRef) {

        const element = this.renderer.selectRootElement(this.el.nativeElement);

        jQuery(element)
            .on('click', '.platform', (e: any, args: any) => {
                jQuery(element).toggleClass('slide-active');
            });

    }

}
