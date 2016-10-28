import {Component,ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'professor-detail',
    templateUrl: 'professor-detail.template.pug',
    styles:require(['./professor-detail.styles.scss'])
})

export class ProfessorDetailComponent {
    public professorName:string;
    constructor() {}
    getName(event){
        this.professorName = event;
    }

}