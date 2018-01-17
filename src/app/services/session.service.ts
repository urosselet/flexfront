import { CommonService }                        from './common.service';
import { Http, Response, RequestOptions }       from '@angular/http';
import { Injectable }                           from '@angular/core';
import { Router }                               from '@angular/router';
import { Observable }                           from 'rxjs/Rx';

@Injectable()
export class SessionService extends CommonService {

    /**
     * Session API base Url
     * @type {String}
     */
    private baseUrl = process.env.API_URL.concat('session/');

    /**
     * [constructor description]
     * @param {Http} private http [description]
     */
    constructor(
        private http: Http,
        public router: Router
    ) { super(); }

    /**
     * Session handler
     * @return {Observable<any[]>} [description]
     */
    public getSessionId(): Observable<any> {
        return this.http.get(this.baseUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    /**
     * Session handler
     * @return {Observable<any[]>} [description]
     */
    public getSessionData(): Observable<any> {

        let sessionID = String(localStorage.getItem('currentSession'));

        return this.http.get(this.baseUrl + sessionID )
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

}
