import { Directive, ElementRef, HostListener, Input } 	from '@angular/core';

import * as jQuery										from 'jquery';

@Directive({
	selector: '[slide]'
})

export class SlideDirective {

	constructor(private el: ElementRef) {
		jQuery(this.el.nativeElement)
			.on('click', '.slide-btn', (e: any, args: any) => {
				jQuery(this.el.nativeElement).toggleClass('view-slide')
			});
	}

}
