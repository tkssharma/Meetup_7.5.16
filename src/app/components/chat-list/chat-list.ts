import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {ChatMessage} from '../chat-message/chat-message';

@Component({
    selector: 'chat-list',
    templateUrl: 'app/components/chat-list/chat-list.html',
    styleUrls: ['app/components/chat-list/chat-list.css'],
    providers: [],
    directives: [ChatMessage],
    pipes: []
})
export class ChatList {
    messages: Observable<any[]>;
    
    constructor(private af: AngularFire) {
        this.messages = af.database.list('/messages');
    }

    ngOnInit() {
        
    }
}
