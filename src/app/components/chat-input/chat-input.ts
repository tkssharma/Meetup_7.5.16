import {Component} from 'angular2/core';
import {FirebaseAuth, AuthProviders, AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
    selector: 'chat-input',
    templateUrl: 'app/components/chat-input/chat-input.html',
    providers: [AuthProviders],
    directives: [],
    pipes: []
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
