import { NgModule }             		from '@angular/core';
import { RouterModule, Routes } 		from '@angular/router';

import { ChatBotComponent }  			from '../components/chatbot/chatbot.component';

const routes: Routes = [
	{ path: '', redirectTo: 'chat-bot', pathMatch: 'full' },
	{ path: 'chat-bot', component: ChatBotComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}