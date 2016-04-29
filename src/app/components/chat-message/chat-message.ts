import {Component, Input, Inject, OnInit} from 'angular2/core';
import {FirebaseAuth} from 'angularfire2';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'chat-message',
    template: `
    <li [ngClass]="{right: isYou, left: !isYou}" class="message appeared">
        <div class="avatar"><img src="{{message.image}}" class="img-responsive img-circle avatar" alt="Image"></div>
        <div class="text_wrapper">
            <div class="text">{{message.text}}</div>
        </div>
    </li>
    `
})
export class ChatMessage implements OnInit {
    isYou: boolean = false;
    profile: any = {};
    
    @Input() message: any;
    
    constructor(private auth: FirebaseAuth) {
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




