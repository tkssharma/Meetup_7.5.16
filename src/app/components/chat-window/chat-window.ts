import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {ChatInput} from '../chat-input/chat-input';
import {ChatList} from '../chat-list/chat-list';

@Component({
    templateUrl: 'app/components/chat-window/chat-window.html',
    styleUrls: ['app/components/chat-window/chat-window.css'],
    providers: [],
    directives: [ChatInput, ChatList],
    pipes: []
})
export class ChatWindow {
    messages: Observable<any[]>;
    
    constructor(private af: AngularFire) {
        this.messages = af.database.list('/messages');
    }

    ngOnInit() {
        
    }
}
