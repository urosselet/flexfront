import { enableProdMode } 				from '@angular/core';
import { platformBrowserDynamic }		from '@angular/platform-browser-dynamic';

import { AppModule }					from '../app/modules/app.module';

if (process.env.ENV === 'PROD' || process.env.ENV === 'STAGING')
	enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
