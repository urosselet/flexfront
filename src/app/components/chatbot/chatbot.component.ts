import { Component, ViewEncapsulation, OnInit, Output, Input, EventEmitter }  from '@angular/core';

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

	constructor() { }

	ngOnInit(): void { }

	private search(): void {
		this.questions.push({ 'text': this.query });
    	this.fullTextInput.emit(this.query);
		this.query = '';
	}

}