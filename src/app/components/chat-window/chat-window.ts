import {Component} from 'angular2/core';
import {FirebaseAuth} from 'angularfire2';
import {ChatTopMenu} from '../chat-topmenu/chat-topmenu';
import {ChatList} from '../chat-list/chat-list';
import {ChatInput} from '../chat-input/chat-input';

@Component({
    template: `
    <div class="chat_window">
        <chat-topmenu></chat-topmenu>
        <chat-list *ngIf="auth | async"></chat-list>
        <img *ngIf="!(auth | async)" src="app/assets/before.png" class="img-responsive" alt="Responsive image">
        <chat-input *ngIf="auth | async"></chat-input>
    </div>
    `,
    directives: [ChatList, ChatInput, ChatTopMenu]
})
export class ChatWindow {   
    constructor(private auth: FirebaseAuth) {}
}












