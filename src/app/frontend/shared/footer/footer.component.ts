import  { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'home-footer',
    templateUrl: './footer.template.pug',
    styleUrls:require(['./footer.styles.scss']),
    encapsulation: ViewEncapsulation.None
})

export class HomeFooter {
    constructor() {}
}