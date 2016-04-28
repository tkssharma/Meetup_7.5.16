import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'chat-message',
    templateUrl: 'app/components/chat-message/chat-message.html',
    styleUrls: ['app/components/chat-message/chat-message.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class ChatMessage {
    messages: Observable<any[]>;
    
    constructor(private af: AngularFire) {
        this.messages = af.database.list('/messages');
    }

    ngOnInit() {
        
    }
}
