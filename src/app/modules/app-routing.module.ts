import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { IndexComponent }               from '../components/index/index.component';
import { ProcessComponent }             from '../components/process/process.component';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'process', component: ProcessComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
