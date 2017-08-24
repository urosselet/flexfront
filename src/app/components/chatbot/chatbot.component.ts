import { Component, ViewEncapsulation, OnInit }  from '@angular/core';

import { SearchService }						 from '../../services/search.service';

@Component({
	selector: 'fc-chatbot',
	templateUrl: 'chatbot.component.html',
	styleUrls: ['chatbot.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class ChatBotComponent implements OnInit {

	private query: string;

	constructor(private searchService: SearchService) { }

	ngOnInit(): void { }

	public search(q: string): void {
		console.log(q)
		/*searchService.query(q)
			.subscribe(
                res => {},
                error => {}
            );*/
	}

}