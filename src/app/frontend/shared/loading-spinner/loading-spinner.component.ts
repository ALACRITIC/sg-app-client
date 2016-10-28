/**
 * Created by Centroida-2 on 10/29/2016.
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'loading-spinner',
    template: `<div class="loader">Loading...</div>`,
    styles:require(['./loading-spinner.styles.scss'])
})
export class LoadingSpinner {}