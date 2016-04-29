import {Component, Inject} from 'angular2/core';
import {ChatList} from '../chat-list/chat-list';
import {ChatInput} from '../chat-input/chat-input';
import {FirebaseAuth, AuthProviders} from 'angularfire2';
import {ChatAuth} from '../chat-auth/chat-auth';

@Component({
    templateUrl: 'app/components/chat-window/chat-window.html',
    providers: [AuthProviders],
    directives: [ChatList, ChatInput, ChatAuth],
    pipes: []
})
export class ChatWindow {   
    constructor(private auth: FirebaseAuth) {
    }
    ngOnInit() {}
}
