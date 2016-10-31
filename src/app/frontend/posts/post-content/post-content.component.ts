/**
 * Created by Centroida-2 on 10/31/2016.
 */
import {Component, OnInit, Input,ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'post-content',
    template:require ('./post-content.template.pug'),
    styles:require(['./post-content.styles.scss'])
})
export class FrontPostContent implements OnInit {
    @Input() postContent;

}