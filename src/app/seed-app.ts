import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ChatContainer} from './components/chat-container/chat-container';

@Component({
    selector: 'seed-app',
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/seed-app.html',
})
@RouteConfig([
    { path: '/chat', component: ChatContainer, name: 'ChatContainer', useAsDefault: true }
])
export class SeedApp {

    constructor() { }

}
