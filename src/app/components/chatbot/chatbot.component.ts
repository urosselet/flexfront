import { Component, ViewEncapsulation, ElementRef, OnInit, Output, Input, Renderer, EventEmitter, ViewChild }  from '@angular/core';

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

	@ViewChild('messages') conversationContainer: ElementRef;

	private query: string;

	constructor(private renderer: Renderer) { }

	ngOnInit(): void { }

	private search(): void {
		this.questions.push({ 'text': this.query });
    	this.fullTextInput.emit(this.query);
		this.query = '';
		this.scrollBottom();
	}

	private scrollBottom(): void {
	    this.renderer.setElementProperty(this.conversationContainer.nativeElement, 'scrollTop', 1e10);
	}

}