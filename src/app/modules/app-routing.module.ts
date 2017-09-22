import { NgModule }             		from '@angular/core';
import { RouterModule, Routes } 		from '@angular/router';

import { IndexComponent }  			from '../components/_index/index.component';

const routes: Routes = [
	{ path: '', redirectTo: 'index', pathMatch: 'full' },
	{ path: 'index', component: IndexComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}