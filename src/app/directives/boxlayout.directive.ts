import { Directive, ElementRef, Renderer, AfterViewInit, NgZone }     from '@angular/core';

import * as jQuery                                                    from 'jquery';

declare var Boxlayout: any;
declare var Modernizr: any;

@Directive({
    selector: '[box-layout]'
})

export class BoxLayoutDirective implements AfterViewInit {

    constructor(private zone: NgZone, private el: ElementRef) {}

    public ngAfterViewInit() {

        const element = this.el.nativeElement;
        
        this.zone.run(() => {

            var $el = jQuery('#bl-main', element),
                $sections = jQuery($el).children( 'section' ),
                // works section
                $sectionWork = $( '#bl-work-section', element ),
                // work items
                $workItems = $( '#bl-work-items > li', element ),
                // work panels
                $workPanelsContainer = $( '#bl-panel-work-items', element ),
                $workPanels = $workPanelsContainer.children( 'div' ),
                totalWorkPanels = $workPanels.length,
                // navigating the work panels
                $nextWorkItem = $workPanelsContainer.find( 'nav > span.bl-next-work' ),
                // if currently navigating the work items
                isAnimating = false,
                // close work panel trigger
                $closeWorkItem = $workPanelsContainer.find( 'nav > span.bl-icon-close' ),
                transEndEventNames = {
                    'WebkitTransition' : 'webkitTransitionEnd',
                    'MozTransition' : 'transitionend',
                    'OTransition' : 'oTransitionEnd',
                    'msTransition' : 'MSTransitionEnd',
                    'transition' : 'transitionend'
                },
                // transition end event name
                transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
                currentWorkPanel = null,
                // support css transitions
                supportTransitions = Modernizr.csstransitions;

            function initEvents() {

                $sections.each( function() {

                    var $section = $( this );

                    // expand the clicked section and scale down the others
                    $section.on( 'click', function() {

                        if ( !$section.data( 'open' ) ) {
                            $section.data( 'open', true ).addClass( 'bl-expand bl-expand-top' );
                            $el.addClass( 'bl-expand-item' );
                        }

                    }).find( 'span.bl-icon-close' ).on( 'click', function() {
                        
                        // close the expanded section and scale up the others
                        $section.data( 'open', false ).removeClass( 'bl-expand' ).on( transEndEventName, function( event ) {
                            if( !$( event.target ).is( 'section' ) ) return false;
                            $( this ).off( transEndEventName ).removeClass( 'bl-expand-top' );
                        } );

                        if ( !supportTransitions ) {
                            $section.removeClass( 'bl-expand-top' );
                        }

                        $el.removeClass( 'bl-expand-item' );
                        
                        return false;
                    } );

                });

            }

            initEvents();

        });
    }

}
