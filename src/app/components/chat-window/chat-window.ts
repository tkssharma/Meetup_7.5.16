import {Component, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {ChatInput} from '../chat-input/chat-input';
import {ChatList} from '../chat-list/chat-list';
import {ChatAuth} from '../chat-auth/chat-auth';
import {FirebaseAuth, AuthProviders} from 'angularfire2';

@Component({
    templateUrl: 'app/components/chat-window/chat-window.html',
    styleUrls: ['app/components/chat-window/chat-window.css'],
    providers: [],
    directives: [ChatAuth, ChatInput, ChatList],
    pipes: []
})
export class ChatWindow {   
    
    profile: any = {};
    
    constructor(private auth: FirebaseAuth) {
        if(this.auth.getAuth() !== null) {
            this.profile = this.auth.getAuth().twitter;
        }
    }

    ngOnInit() {
       
    }
}
