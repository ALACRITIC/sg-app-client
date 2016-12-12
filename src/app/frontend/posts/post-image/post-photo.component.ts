/**
 * Created by Centroida-2 on 10/31/2016.
 */
import { Component,Input,ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'post-photo',
    template:require ('./post-photo.template.pug'),
    styleUrls:['./post-photo.styles.scss']
})
export class FrontPostPhoto  {
    @Input() postImage;
}