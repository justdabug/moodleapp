// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Component that displays some help regarding the CoreLoginSitePage.
 */
@IonicPage({ segment: 'core-login-site-help' })
@Component({
    selector: 'page-core-login-site-help',
    templateUrl: 'site-help.html',
})
export class CoreLoginSiteHelpPage {

    urlImageHtml: string;
    setupLinkHtml: string;

    constructor(protected viewCtrl: ViewController,
            protected translate: TranslateService) {

        this.urlImageHtml = '<img src="assets/img/login/faq_url.png" role="presentation">';
        this.setupLinkHtml = '<a href="https://moodle.com/getstarted/" title="' +
                this.translate.instant('core.login.faqsetupsitelinktitle') + '">https://moodle.com/getstarted/</a>';
    }

    /**
     * Close help modal.
     */
    closeHelp(): void {
        this.viewCtrl.dismiss();
    }
}
