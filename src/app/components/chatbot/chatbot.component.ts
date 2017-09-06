import { Component, ViewEncapsulation, OnInit, Output, Input, EventEmitter }    from '@angular/core';
import { Observable } 															from 'rxjs/Observable';

import { SearchService }						 								from '../../services/search.service';

@Component({
	selector: 'fc-chatbot',
	templateUrl: 'chatbot.component.html',
	styleUrls: ['chatbot.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class ChatBotComponent implements OnInit {

	@Input() questions: any[];
	@Input() answers: any[];

	@Output() fullTextInput: EventEmitter<string> = new EventEmitter();

	private query: string;
	private sources: any[] = [];

	constructor(private searchService: SearchService) { }

	ngOnInit(): void { }

	observableSource(query: any): Observable<any[]> {
		return this.searchService.autocomplete(query);
	}

	private search(): void {
		this.questions.push({ 'text': this.query });
    	this.fullTextInput.emit(this.query);
		this.query = '';
	}

}