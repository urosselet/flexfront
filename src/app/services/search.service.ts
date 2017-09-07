import { Injectable }                     		from '@angular/core';
import { Http, Response, RequestOptions } 		from '@angular/http';
import { Router }            					from '@angular/router';
import { Observable }                     		from 'rxjs/Rx';

import { CommonService }                        from './common.service';

@Injectable()
export class SearchService extends CommonService {

	/**
	 * search API base Url
	 * @type {String}
	 */

	private baseUrl = process.env.API_URL.concat('search/');

	/**
	 * [constructor description]
	 * @param {Http} private http [description]
	 */
	constructor(
		private http: Http,
		public router: Router
	) { super() }

	/**
	 * User query
	 * @return {Observable<any[]>} [description]
	 */
	public query(query: any, isFirstQuery: boolean): Observable<any> {
		return this.http.get(this.baseUrl, new RequestOptions({ params: { 'query': query, 'session': '8392371938321', 'status': isFirstQuery } }))
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	/**
	 * Query autocomplete
	 * @param  {any}             query [description]
	 * @return {Observable<any>}       [description]
	 */
	public autocomplete(query: any): Observable<any> {
		return this.http.get(this.baseUrl + 'complete', new RequestOptions({ params: { 'query': query } }))
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

}
