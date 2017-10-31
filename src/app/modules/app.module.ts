import { NgModule }                             from '@angular/core';
import { BrowserModule }                        from '@angular/platform-browser';
import { BrowserAnimationsModule }              from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }     from '@angular/forms';
import { HttpModule, JsonpModule }              from '@angular/http';

/* Angular material modules */
import { MatRadioModule, MatButtonModule }      from '@angular/material';

/* Third party modules */
import { CookieModule }                         from 'ngx-cookie';
import { NgxAutoScroll }                        from 'ngx-auto-scroll/lib/ngx-auto-scroll.directive';
import { NguiAutoCompleteModule }               from '@ngui/auto-complete';
import { MnFullpageModule }                     from 'ngx-fullpage';
import { ArchwizardModule }                     from 'ng2-archwizard';

/* Application Wide routing */
import { AppRoutingModule }                     from './app-routing.module';

/* Bootstrap Component */
import { AppComponent }                         from '../components/app.component';

/* Application Components */
import { IndexComponent }                       from '../components/index/index.component';
import { ChatBotComponent }                     from '../components/chatbot/chatbot.component';
import { ResultComponent }                      from '../components/result/result.component';
import { ProcessComponent }                     from '../components/process/process.component';

/* Directives */
import { SlideDirective }                       from '../directives/slide.directive';

/* Pipes */
import { MapToIterable }                        from '../pipes/application.pipes';

/* App Services */
import { SearchService }                        from '../services/search.service';
import { CSProcessService }                     from '../services/csprocess.service';

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
        CookieModule.forRoot(),
        MnFullpageModule.forRoot(),
        ArchwizardModule
    ],
    declarations: [
        AppComponent,
        IndexComponent,
        ChatBotComponent,
        ResultComponent,
        ProcessComponent,
        NgxAutoScroll,
        MapToIterable,
        SlideDirective
    ],
    providers: [
        SearchService,
        CSProcessService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
