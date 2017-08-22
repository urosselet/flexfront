import { NgModule }             		from '@angular/core';
import { RouterModule, Routes } 		from '@angular/router';

import { IndexComponent }  			from '../components/_index/index.component';

const routes: Routes = [
	{ path: '', redirectTo: 'chat-bot', pathMatch: 'full' },
	{ path: 'chat-bot', component: IndexComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}