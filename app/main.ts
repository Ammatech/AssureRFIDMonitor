import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
//import {App} from './test.component';
import { HTTP_PROVIDERS } from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
    .catch(err => console.error(err));


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/