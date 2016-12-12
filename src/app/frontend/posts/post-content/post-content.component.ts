/**
 * Created by Centroida-2 on 10/31/2016.
 */
import {Component, Input,ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'post-content',
    template:require ('./post-content.template.pug'),
    styleUrls:['./post-content.styles.scss']
})
export class FrontPostContent {
    @Input() postContent;
}