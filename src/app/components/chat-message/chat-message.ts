import {Component, Input, Inject, OnInit} from 'angular2/core';
import {FirebaseAuth} from 'angularfire2';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'chat-message',
    templateUrl: 'app/components/chat-message/chat-message.html',
    providers: [],
    directives: [],
    pipes: []
})
export class ChatMessage implements OnInit {
    isYou: boolean = false;
    profile: any = {};
    
    @Input() message: any;
    
    constructor(public auth: FirebaseAuth) {
        if(this.auth.getAuth() !== null) {
            this.profile = this.auth.getAuth().twitter;
        }
    }
    
    ngOnInit() {
        if (this.message.id === this.profile.id) {
            this.isYou = true;
        } else {
            this.isYou = false;
        }
    }
    
}
