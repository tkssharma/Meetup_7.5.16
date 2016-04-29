import {Component, OnInit, AfterViewChecked, ElementRef, ViewChild} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ChatMessage} from '../chat-message/chat-message';

@Component({
    selector: 'chat-list',
    templateUrl: 'app/components/chat-list/chat-list.html',
    providers: [],
    directives: [ChatMessage],
    pipes: []
})
export class ChatList implements OnInit, AfterViewChecked {

    messages: FirebaseListObservable<any[]>;
    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

    constructor(private af: AngularFire) {
        this.messages = af.database.list('/messages');
    }

    ngOnInit() { }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch (err) { }
    }
}
