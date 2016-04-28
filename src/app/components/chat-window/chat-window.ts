import {Component, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {ChatInput} from '../chat-input/chat-input';
import {ChatList} from '../chat-list/chat-list';
import {FirebaseAuth} from 'angularfire2';

@Component({
    templateUrl: 'app/components/chat-window/chat-window.html',
    styleUrls: ['app/components/chat-window/chat-window.css'],
    providers: [],
    directives: [ChatInput, ChatList],
    pipes: []
})
export class ChatWindow {
    messages: Observable<any[]>;
    profile: any;
    
    constructor(private af: AngularFire, @Inject(FirebaseAuth) public auth: FirebaseAuth) {
        this.messages = af.database.list('/messages');
        this.profile = this.auth.getAuth().twitter;
        console.log(this.profile);
    }

    ngOnInit() {
        
    }
}
