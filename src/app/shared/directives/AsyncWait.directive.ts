/**
 * Created by hgeorgiev on 10/11/16.
 */
import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';
@Directive({
    selector: '[asyncWait]'
})
export class AsyncWaitDirective {
    private func:Function;

    constructor(private el: ElementRef, private renderer: Renderer) {
        this.func = this.el.nativeElement.getAttribute('click');
        console.log(this.func);
    }

    // @Input('asyncFunc') func:Function;



    @HostListener('click', ['$event.target']) onClick(btn) {
        console.log(btn);
    }

    private disable() {
        this.renderer.setElementAttribute(this.el.nativeElement, 'disabled', true);
    }
}