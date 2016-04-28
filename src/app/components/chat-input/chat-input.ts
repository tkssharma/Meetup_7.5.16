import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'chat-input',
    templateUrl: 'app/components/chat-input/chat-input.html',
    styleUrls: ['app/components/chat-input/chat-input.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class ChatInput {

    messages: FirebaseListObservable<any[]>;
    
    constructor(private af: AngularFire) {
        
    }

    ngOnInit() {
        this.messages = this.af.database.list('/messages');
    }
    
    send(newMessage:string) {
        this.messages.push(newMessage);
    }
}
