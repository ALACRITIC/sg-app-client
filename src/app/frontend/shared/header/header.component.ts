import  {Component, ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.template.pug',
    styleUrls: ['./header.styles.scss'],
    encapsulation: ViewEncapsulation.Emulated
})

export class FrontHeader {
    @Input('headerName') headerName:string;
    constructor() {}
}