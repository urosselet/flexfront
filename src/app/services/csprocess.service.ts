import { Injectable }                           from '@angular/core';
import { Http, Response, RequestOptions }       from '@angular/http';
import { Router }                               from '@angular/router';
import { Observable }                           from 'rxjs/Rx';

import { CommonService }                        from './common.service';

import * as io                                  from 'socket.io-client';

@Injectable()
export class CSProcessService extends CommonService {

    /**
     * Socket object
     * @type {any}
     */
    private socket: any;

    /**
     * CS Process API base Url
     * @type {String}
     */
    private baseUrl = process.env.API_URL.concat('csprocess/');

    /**
     * Activities API base Url
     * @type {String}
     */
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
     * Get CS activities
     * @return {Observable<any[]>} [description]
     */
    public findAll(): Observable<any> {
        return this.http.get(this.activityUrl + 'wizard')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    public getUpdatedActivity(): Observable<any> {
        let observable = new Observable(observer => {

            this.socket = io(process.env.API_URL);

            this.socket.on('activityUpdate', (data) => {
                observer.next(data);
            });

            return () => { this.socket.disconnect(); };
            
        });
        return observable;
    }

}
