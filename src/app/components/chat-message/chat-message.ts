import {Component, Input} from 'angular2/core';

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
    
    constructor() {
    }

    ngOnInit() {
        
    }
}
