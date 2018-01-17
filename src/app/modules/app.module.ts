import { NgModule }                             from '@angular/core';
import { BrowserModule }                        from '@angular/platform-browser';
import { BrowserAnimationsModule }              from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }     from '@angular/forms';
import { HttpModule, JsonpModule }              from '@angular/http';

/* Angular material modules */
import { MatRadioModule, MatButtonModule }      from '@angular/material';

/* Third party modules */
import { NguiAutoCompleteModule }               from '@ngui/auto-complete';
import { ArchwizardModule }                     from 'ng2-archwizard';
import { ScrollToModule }                       from '@nicky-lenaers/ngx-scroll-to';

/* Application Wide routing */
import { AppRoutingModule }                     from './app-routing.module';

/* Bootstrap Component */
import { AppComponent }                         from '../components/app.component';

/* Application Components */
import { ActivityWizardComponent }              from '../components/_activity-wizard/activity-wizard.component';

import { IndexComponent }                       from '../components/index/index.component';
import { ProcessComponent }                     from '../components/process/process.component';
import { AboutServicesComponent }               from '../components/about-services/about-services.component';
import { SummaryComponent }                     from '../components/summary/summary.component';

/* Directives */
import { BoxLayoutDirective }                   from '../directives/boxlayout.directive';
import { SlidePushDirective }                   from '../directives/slide-push.directive';

/* Pipes */
import { MapToIterable, MapIdToText }           from '../pipes/application.pipes';

/* App Services */
import { SearchService }                        from '../services/search.service';
import { CSProcessService }                     from '../services/csprocess.service';
import { SessionService }                       from '../services/session.service';

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
        ArchwizardModule,
        ScrollToModule.forRoot()
    ],
    declarations: [
        AppComponent,
        IndexComponent,
        ProcessComponent,
        ActivityWizardComponent,
        AboutServicesComponent,
        SummaryComponent,
        MapToIterable,
        MapIdToText,
        BoxLayoutDirective,
        SlidePushDirective
    ],
    providers: [
        SearchService,
        CSProcessService,
        SessionService,
        CSProcessResolver
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
