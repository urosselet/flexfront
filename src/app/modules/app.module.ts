import { NgModule }								from '@angular/core';
import { BrowserModule }						from '@angular/platform-browser';
import { BrowserAnimationsModule } 				from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }		from '@angular/forms';
import { HttpModule, JsonpModule }				from '@angular/http';

/* Application Wide routing */
import { AppRoutingModule }						from './app-routing.module';


/* API Services */


/* Resolve services */


/* Bootstrap Component */
import { AppComponent }							from '../components/app.component';

/* Application Components */
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
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		ChatBotComponent,
		ResultComponent
	],
	providers: [],
	bootstrap: [ AppComponent ]
})

export class AppModule {}