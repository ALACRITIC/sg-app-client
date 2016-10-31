/**
 * Created by Centroida-2 on 10/29/2016.
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'loading-spinner',
    template: `<i class="fa fa-circle-o-notch fa-spin fa-5x fa-fw loading"></i>
<span class="sr-only">Loading...</span>`,
    styles:[ `.loading {
    font-size: 4em;
    text-align: center;
    width: 100%;
    vertical-align: center;
}`]
})
export class LoadingSpinner {}