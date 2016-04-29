import {Component} from 'angular2/core';
import {FirebaseAuth, AuthProviders} from 'angularfire2';

@Component({
    selector: 'chat-auth',
    template: `
    <div *ngIf="!(auth | async)">
        <div *ngIf="!(auth | async)" class="round_button" (click)="loginTwitter()">
            <div class="text"><i class="fa fa-twitter" aria-hidden="true"></i></div>
        </div>
    </div>
    <div *ngIf="auth | async">
        <div class="round_button" (click)="logout()">
            <div class="text"><i class="fa fa-sign-out" aria-hidden="true"></i></div>
        </div>
    </div>
    `,
    providers: [AuthProviders]
})
export class ChatAuth {
    profile: any = {};
    
    constructor(private auth: FirebaseAuth) {}

    loginTwitter() {
        this.auth.login({
            provider: AuthProviders.Twitter
        });
    }
    
    logout(provider) {
        this.auth.logout();
    }
}
