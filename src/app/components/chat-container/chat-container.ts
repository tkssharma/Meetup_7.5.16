import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
    templateUrl: 'app/components/chat-container/chat-container.html',
    styleUrls: ['app/components/chat-container/chat-container.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class ChatContainer {
    messages: Observable<any[]>;
    
    constructor(private af: AngularFire) {
        this.messages = af.database.list('/messages');
    }

    ngOnInit() {
        
    }
}
