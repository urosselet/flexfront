import { Component, ViewEncapsulation, OnInit, Output, Input, EventEmitter }    from '@angular/core';
import { Observable }                                                           from 'rxjs/Observable';

import { SearchService }                                                        from '../../services/search.service';

@Component({
    selector: 'fc-chatbot',
    templateUrl: 'chatbot.component.html',
    styleUrls: ['chatbot.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ChatBotComponent implements OnInit {

    @Input() public questions: any[];
    @Input() public answers: any[];

    @Output() public fullTextInput: EventEmitter<string> = new EventEmitter();

    public query: string;
    public sources: any[] = [];

    constructor(private searchService: SearchService) { }

    public ngOnInit(): void { }

    public observableSource(query: any): Observable<any[]> {
        return this.searchService.autocomplete(query);
    }

    public search(): void {
        this.questions.push({ text: this.query });
        this.fullTextInput.emit(this.query);
        this.query = '';
    }

}
