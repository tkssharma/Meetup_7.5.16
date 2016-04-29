import {Component, AfterViewChecked, ElementRef, ViewChild} from 'angular2/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ChatMessage} from '../chat-message/chat-message';

@Component({
    selector: 'chat-list',
    template: `
    <ul #scrollMe class="messages">
        <chat-message *ngFor="#message of messages | async" [message]="message"></chat-message>
    </ul> 
    `,
    directives: [ChatMessage]
})
export class ChatList implements AfterViewChecked {

    messages: FirebaseListObservable<any[]>;
    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

    constructor(private af: AngularFire) {
        this.messages = af.database.list('/messages');
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop
                 = this.myScrollContainer.nativeElement.scrollHeight;
        } catch (err) { }
    }
}



