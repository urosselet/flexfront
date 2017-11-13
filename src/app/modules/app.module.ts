import { NgModule }                             from '@angular/core';
import { BrowserModule }                        from '@angular/platform-browser';
import { BrowserAnimationsModule }              from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }     from '@angular/forms';
import { HttpModule, JsonpModule }              from '@angular/http';

/* Angular material modules */
import { MatRadioModule, MatButtonModule }      from '@angular/material';

/* Third party modules */
import { NgxAutoScroll }                        from 'ngx-auto-scroll/lib/ngx-auto-scroll.directive';
import { NguiAutoCompleteModule }               from '@ngui/auto-complete';
import { SwiperModule }                         from 'ngx-swiper-wrapper';

/* Application Wide routing */
import { AppRoutingModule }                     from './app-routing.module';

/* Bootstrap Component */
import { AppComponent }                         from '../components/app.component';

/* Application Components */
import { DimensionSwiperComponent }             from '../components/_dimension-swiper/dimension-swiper.component';

import { IndexComponent }                       from '../components/index/index.component';
import { ProcessComponent }                     from '../components/process/process.component';

/* Directives */
import { BoxLayoutDirective }                   from '../directives/boxlayout.directive';

/* Pipes */
import { MapToIterable }                        from '../pipes/application.pipes';

/* App Services */
import { SearchService }                        from '../services/search.service';
import { CSProcessService }                     from '../services/csprocess.service';

/* Resolvers */
import { CSProcessResolver }                    from '../services/resolvers/csprocess.resolver';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule,
        MatRadioModule,
        MatButtonModule,
        NguiAutoCompleteModule,
        SwiperModule
    ],
    declarations: [
        AppComponent,
        IndexComponent,
        ProcessComponent,
        DimensionSwiperComponent,
        NgxAutoScroll,
        MapToIterable,
        BoxLayoutDirective
    ],
    providers: [
        SearchService,
        CSProcessService,
        CSProcessResolver
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
