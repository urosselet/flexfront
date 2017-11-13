import { Injectable }                           from '@angular/core';
import { Http, Response, RequestOptions }       from '@angular/http';
import { Router }                               from '@angular/router';
import { Observable }                           from 'rxjs/Rx';

import { CommonService }                        from './common.service';

@Injectable()
export class CSProcessService extends CommonService {

    /**
     * search API base Url
     * @type {String}
     */
    private baseUrl = process.env.API_URL.concat('csprocess/');
    private activityUrl = process.env.API_URL.concat('csactivity/');

    /**
     * Class constructor
     * @param {Http} private http [description]
     */
    constructor(
        private http: Http,
        public router: Router
    ) { super(); }

    /**
     * Get CS Process based on ID
     * @return {Observable<any[]>} [description]
     */
    public findOne(): Observable<any> {
        return this.http.get(this.activityUrl + 'wizard')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

}
