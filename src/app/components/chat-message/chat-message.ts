import {Component, Input, Inject} from 'angular2/core';
import {FirebaseAuth} from 'angularfire2';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'chat-message',
    templateUrl: 'app/components/chat-message/chat-message.html',
    styleUrls: ['app/components/chat-message/chat-message.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class ChatMessage {
    @Input() message: string;
    profile: any;
    isYou: boolean = false;

    constructor( @Inject(FirebaseAuth) public auth: FirebaseAuth) {
        this.profile = this.auth.getAuth().twitter;
    }

    ngOnInit() {
        if (this.message.username === this.profile.username) {
            this.isYou = true;
        } else {
            this.isYou = false;
        }
    }

}
