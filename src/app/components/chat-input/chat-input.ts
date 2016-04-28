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

    constructor(private af: AngularFire, private auth: FirebaseAuth) {

    }

    ngOnInit() {
        this.messages = this.af.database.list('/messages');
    }

    loginFacebook(provider) {
        this.auth.login({
            provider: AuthProviders.Facebook
        });
    }
    
    loginTwitter(provider) {
        this.auth.login({
            provider: AuthProviders.Twitter
        });
    }

    send(newMessage: string) {
        this.messages.push(newMessage);
    }
}
