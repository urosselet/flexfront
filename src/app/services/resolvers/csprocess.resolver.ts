import { Injectable }                           from '@angular/core';
import { Resolve, ActivatedRouteSnapshot }      from '@angular/router';
import { Observable }                           from 'rxjs/Rx';

import { CSProcessService }                     from '../csprocess.service';

@Injectable()
export class CSProcessResolver implements Resolve<any> {

    constructor(
        private csProcessService: CSProcessService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {

        return this.csProcessService.findAll(route.params.sessionId);

    }

}

