import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'chat-input',
    templateUrl: 'app/components/chat-input/chat-input.html',
    styleUrls: ['app/components/chat-input/chat-input.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class ChatInput {
    messages: Observable<any[]>;
    
    constructor(private af: AngularFire) {
        this.messages = af.database.list('/messages');
    }

    ngOnInit() {
        
    }
}
