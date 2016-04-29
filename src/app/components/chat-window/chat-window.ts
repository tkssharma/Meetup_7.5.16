import {Component} from 'angular2/core';
import {FirebaseAuth} from 'angularfire2';
import {ChatAuth} from '../chat-auth/chat-auth';
import {ChatList} from '../chat-list/chat-list';
import {ChatInput} from '../chat-input/chat-input';

@Component({
    template: `
    <div class="chat_window">
        <div class="top_menu">
            <div class="buttons">
                <chat-auth></chat-auth>
            </div>
            <div class="title">Simple Chat App</div>
        </div>
        <chat-list></chat-list>
        <chat-input></chat-input>
    </div>
    `,
    directives: [ChatList, ChatInput, ChatAuth]
})
export class ChatWindow {   
    constructor(private auth: FirebaseAuth) {}
}












