import { Injectable }                     		from '@angular/core';
import { Http, Response, RequestOptions } 		from '@angular/http';
import { Router }            					from '@angular/router';
import { Observable }                     		from 'rxjs/Rx';

import { CommonService }                        from './common.service';

@Injectable()
export class SessionService extends CommonService {

	/**
	 * Connection API base Url
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
	) { super() }

	/**
	 * [getUsers description]
	 * @return {Observable<User[]>} [description]
	 */
	getSessionId(): Observable<any> {

		return this.http.get(this.baseUrl))
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

}
