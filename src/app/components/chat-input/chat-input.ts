import {Component} from 'angular2/core';
import {NgIf} from 'angular2/common';
import {Http} from 'angular2/http';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {FirebaseAuth, AuthProviders} from 'angularfire2';

@Component({
    selector: 'chat-input',
    templateUrl: 'app/components/chat-input/chat-input.html',
    styleUrls: ['app/components/chat-input/chat-input.css'],
    providers: [AuthProviders],
    directives: [],
    pipes: []
})
export class ChatInput {

    messages: FirebaseListObservable<any[]>;
    profile: any = {};

    constructor(private af: AngularFire, private auth: FirebaseAuth) {
        if(this.auth.getAuth() !== null) {
            this.profile = this.auth.getAuth().twitter;
        }
    }

    ngOnInit() {
        this.messages = this.af.database.list('/messages');
    }

    send(newMessage: string) {
        let message = {
            text: newMessage,
            displayName: this.profile.displayName,
            username: this.profile.username,
            image: this.profile.profileImageURL,
            id: this.profile.id
        }
        this.messages.push(message);
    }
}
