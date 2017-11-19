import { Directive, ElementRef, Renderer, AfterViewInit, NgZone }     from '@angular/core';
import { Observable }                                                 from 'rxjs/Rx';

import * as jQuery                                                    from 'jquery';

declare var Boxlayout: any;
declare var Modernizr: any;

@Directive({
    selector: '[boxLayout]'
})

export class BoxLayoutDirective implements AfterViewInit {

    private transEndEventNames: any = {
        'WebkitTransition' : 'webkitTransitionEnd',
        'MozTransition' : 'transitionend',
        'OTransition' : 'oTransitionEnd',
        'msTransition' : 'MSTransitionEnd',
        'transition' : 'transitionend'
    };

    constructor(private zone: NgZone, private el: ElementRef) {}

    public ngAfterViewInit() {

        const element = this.el.nativeElement;
        
        this.zone.run(() => {

            let $el = jQuery('#bl-main', element),
                $sections = jQuery($el).children( 'section' ),
                transEndEventName = this.transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
                supportTransitions = Modernizr.csstransitions;

            $sections.each( function() {

                var $section = $( this );

                // expand the clicked section and scale down the others
                $section.on( 'click', function(evt) {

                    if ( !$section.data( 'open' ) ) {
                        $section.data( 'open', true ).addClass( 'bl-expand bl-expand-top' );
                        $el.addClass( 'bl-expand-item' );
                    }

                }).find( 'span.bl-icon-close' ).on( 'click', function() {
                    
                    // close the expanded section and scale up the others
                    $section.data( 'open', false ).removeClass( 'bl-expand' ).on( transEndEventName, function( event ) {
                        if ( !$( event.target ).is( 'section' ) ) return false;
                        $( this ).off( transEndEventName ).removeClass( 'bl-expand-top' );
                    });

                    if ( !supportTransitions ) {
                        $section.removeClass( 'bl-expand-top' );
                    }

                    $el.removeClass( 'bl-expand-item' );
                    
                    return false;

                });

            });

        });
    }

    public activateBox(index: number): void {

        const element = this.el.nativeElement;

        let $el = jQuery('#bl-main', element),
            $sections = jQuery($el).children( 'section' ),
            transEndEventName = this.transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
            supportTransitions = Modernizr.csstransitions;
        
        this.zone.run(() => {

            if (index <= 2) {

                jQuery($sections[index]).removeClass( 'bl-expand' ).on( transEndEventName, function( event ) {

                    $( this ).data( 'open', false );
                    if ( !$( event.target ).is( 'section' ) ) return false;
                    $( this ).off( transEndEventName ).removeClass( 'bl-expand-top' );

                });

                if ( !supportTransitions ) {
                    jQuery($sections[index]).removeClass( 'bl-expand-top' );
                }

                $el.removeClass( 'bl-expand-item' );

                Observable.interval(1000).take(4).subscribe(() => {
                    jQuery($sections[index + 1]).data( 'open', true ).addClass( 'bl-expand bl-expand-top' );
                    $el.addClass( 'bl-expand-item' );
                });

                return false;

            } else {
                jQuery($sections[index]).removeClass( 'bl-expand bl-expand-top' );
                $el.removeClass( 'bl-expand-item' );
            }

        });

    }

}

