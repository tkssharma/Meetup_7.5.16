import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ChatWindow} from './components/chat-window/chat-window';

@Component({
    selector: 'seed-app',
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/seed-app.html',
    styleUrls: ['app/seed-app.css'],
})
@RouteConfig([
    { path: '/chat', component: ChatWindow, name: 'ChatWindow', useAsDefault: true }
])
export class SeedApp {

    constructor() { }

}
