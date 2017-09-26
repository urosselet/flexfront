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
	 * Platform API base Url
	 * @type {String}
	 */
	private platformBaseUrl = process.env.API_URL.concat('csplatform/');

	/**
	 * [query description]
	 * @type {string}
	 */
	private userQuery: string;

	/**
	 * [category description]
	 * @type {string}
	 */
	private category: string;

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
	public query(query: any): Observable<any> {
		return this.http.get(this.baseUrl, new RequestOptions({ params: { 'query': query } }))
			.map((res: Response) => {
				this.userQuery = query;
				this.category = res.json().cat;
				return res.json();
			})
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

	/**
	 * Get platform detail
	 * @param  {any}             query [description]
	 * @return {Observable<any>}       [description]
	 */
	public getPlatform(id: number): Observable<any> {
		return this.http.get(this.platformBaseUrl + 'getplatformdetail/' + id, new RequestOptions({}))
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	/**
	 * Get user query
	 * @return {string} [description]
	 */
	public getQuery(): string {
		return this.userQuery;
	}

	/**
	 * Get query category
	 * @return {string} [description]
	 */
	public getCategory(): string {
		return this.category;
	}

}
