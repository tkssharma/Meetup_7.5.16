import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {FirebaseAuth, AuthProviders} from 'angularfire2';

@Component({
    selector: 'chat-auth',
    templateUrl: 'app/components/chat-auth/chat-auth.html',
    providers: [AuthProviders],
    directives: [],
    pipes: []
})
export class ChatAuth {

    profile: any = {};
    
    constructor(private auth: FirebaseAuth) {
    }

    ngOnInit() {
        
    }
    
    loginTwitter(provider) {
        this.auth.login({
            provider: AuthProviders.Twitter
        });
    }
    
    logout(provider) {
        this.auth.logout();
    }
}
