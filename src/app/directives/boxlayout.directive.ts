import { Directive, ElementRef, Renderer, AfterViewInit, NgZone }     from '@angular/core';

import * as jQuery                                                    from 'jquery';

declare var Boxlayout: any;
declare var Modernizr: any;

@Directive({
    selector: '[boxLayout]'
})

export class BoxLayoutDirective implements AfterViewInit {

    constructor(private zone: NgZone, private el: ElementRef) {}

    public ngAfterViewInit() {

        const element = this.el.nativeElement;
        
        this.zone.run(() => {

            var $el = jQuery('#bl-main', element),
                $sections = jQuery($el).children( 'section' ),
                transEndEventNames = {
                    'WebkitTransition' : 'webkitTransitionEnd',
                    'MozTransition' : 'transitionend',
                    'OTransition' : 'oTransitionEnd',
                    'msTransition' : 'MSTransitionEnd',
                    'transition' : 'transitionend'
                },
                transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
                supportTransitions = Modernizr.csstransitions;

            function initEvents() {

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

            }

            initEvents();

        });
    }

}
