import {Component} from 'angular2/core';
import {FirebaseAuth} from 'angularfire2';
import {ChatAuth} from '../chat-auth/chat-auth';

@Component({
    selector: 'chat-topmenu',
    template: `
    <div class="top_menu">
        <div class="buttons">
            <chat-auth></chat-auth>
        </div>
        <div class="title">{{title}}</div>
    </div>
    `,
    directives: [ChatAuth]
})
export class ChatTopMenu {   
    title: string = 'Simple Chat App';
    constructor(private auth: FirebaseAuth) {}
}












