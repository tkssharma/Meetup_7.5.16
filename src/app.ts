import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods} from 'angularfire2';

import {SeedApp} from './app/seed-app';
import * as AngularFire2 from 'angularfire2';

bootstrap(SeedApp, [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://meetup07052016.firebaseio.com'),
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    firebaseAuthConfig({
        provider: AuthProviders.Twitter,
        method: AuthMethods.Popup,
        remember: 'default',
        scope: ['email']
    }),
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]).catch(err => console.error(err));
