import { Injectable }                                   from '@angular/core';
import { Http, Headers, RequestOptions, Response }      from '@angular/http';
import { Router }                                       from '@angular/router';
import { Observable }                                   from 'rxjs/Rx';

@Injectable()
export class CommonService {

    constructor() {}

    /**
     * Handle request error
     * @param  {any}             error [description]
     * @return {Observable<any>}       [description]
     */
    public handleError(error: any): Observable<any> {
        if (error.status === 401) { }
        return Observable.throw(error.message || error);
    }

}
