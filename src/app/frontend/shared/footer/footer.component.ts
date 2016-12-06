import  { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'home-footer',
    templateUrl: './footer.template.pug',
    styleUrls:['./footer.styles.scss'],
    encapsulation: ViewEncapsulation.None
})

export class HomeFooter {
    constructor() {}
}