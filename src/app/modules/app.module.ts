import { NgModule }								from '@angular/core';
import { BrowserModule }						from '@angular/platform-browser';
import { BrowserAnimationsModule } 				from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }		from '@angular/forms';
import { HttpModule, JsonpModule }				from '@angular/http';

/* Angular material modules */
import { 
	MaterialModule, 
	MdSliderModule,
	MdTooltipModule  
} 												from '@angular/material';

/* Application Wide routing */
import { AppRoutingModule }						from './app-routing.module';

/* API Services */
import { SearchService }						from '../services/search.service';

/* Resolve services */

/* Bootstrap Component */
import { AppComponent }							from '../components/app.component';

/* Application Components */
import { IndexComponent }						from '../components/_index/index.component';
import { ChatBotComponent }						from '../components/chatbot/chatbot.component';
import { ResultComponent }						from '../components/result/result.component';

/* Pipes */

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		JsonpModule,
		AppRoutingModule,
		MdSliderModule,
		MdTooltipModule
	],
	declarations: [
		AppComponent,
		IndexComponent,
		ChatBotComponent,
		ResultComponent
	],
	providers: [
		SearchService
	],
	bootstrap: [ AppComponent ]
})

export class AppModule {}