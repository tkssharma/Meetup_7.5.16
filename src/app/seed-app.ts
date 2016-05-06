import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ChatWindow} from './components/chat-window/chat-window';

@Component({
  selector: 'seed-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  template: '<router-outlet></router-outlet>',
})
@RouteConfig([
  {
    path: '/chat',
    component: ChatWindow,
    name: 'ChatWindow',
    useAsDefault: true
  }
])
export class SeedApp {
  constructor() { }
}