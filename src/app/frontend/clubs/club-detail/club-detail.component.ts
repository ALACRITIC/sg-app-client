/**
 * Created by Taulant on 9/29/2016.
 */
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'club-detail',
    template:require ('./club-detail.template.pug'),
    styleUrls: ['./club-detail.styles.scss']
})
export class FrontClubDetail {
    constructor() {}

}