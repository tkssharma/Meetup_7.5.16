import {Component} from 'angular2/core';
import {FirebaseAuth, AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
    selector: 'chat-input',
    template: `
    <div class="bottom_wrapper clearfix">
        <div *ngIf="auth | async">
            <div class="message_input_wrapper">
                <input class="message_input" #newMessage placeholder="Type your message here..." />
            </div>
            <div class="send_message" (click)="send(newMessage)">
                <div class="icon"></div>
                <div class="text">Send</div>
            </div>
        </div>
        <div *ngIf="!(auth | async)" class="title">Please login to join this chat</div>
    </div>
    `
})
export class ChatInput {
    messages: FirebaseListObservable<any[]>;
    profile: any = {};
    
    constructor(private af: AngularFire, private auth: FirebaseAuth) {
        this.messages = this.af.database.list('/messages');
        if(this.auth.getAuth() !== null) {
            this.profile = this.auth.getAuth().twitter;
        }
    }
    
    send(newMessage: HTMLInputElement) {
        let message = {
            text: newMessage.value,
            displayName: this.profile.displayName,
            username: this.profile.username,
            image: this.profile.profileImageURL,
            id: this.profile.id
        }
        this.messages.push(message);
        newMessage.value = null;
    }
}




