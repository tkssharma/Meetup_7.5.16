import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'chat-auth',
    templateUrl: 'app/components/chat-auth/chat-auth.html',
    styleUrls: ['app/components/chat-auth/chat-auth.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class ChatAuth {
    messages: Observable<any[]>;
    
    constructor(private af: AngularFire) {
        this.messages = af.database.list('/messages');
    }

    ngOnInit() {
        
    }
}
