/**
 * Created by Taulant on 10/13/2016.
 */
import { Component,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {ProfessorsService} from "../../../../shared/services/professors.service";
import {TypeaheadMatch} from "ng2-bootstrap";

@Component({
    selector: 'professor-search',
    templateUrl: './professor-search.template.pug',
    styles:require(['./professor-search.styles.scss'])
})
export class ProfessorSearch  {
    @Output() selectedSearchItem = new EventEmitter();

    public dataSource:Observable<any>;
    public asyncSelected:string = '';
    public typeaheadLoading:boolean = false;
    public typeaheadNoResults:boolean = false;

    public constructor(private _service:ProfessorsService) {
        this.dataSource = Observable.create((observer:any) => {
            observer.next(this.firstLetter(this.asyncSelected));
        }).mergeMap((token:string) => this._service.search(token));
    }
    firstLetter(str:string) {
         return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    public changeTypeaheadLoading(e:boolean):void {
        this.typeaheadLoading = e;
        console.log('typeahead loading',e);
    }

    public changeTypeaheadNoResults(e:boolean):void {
        this.typeaheadNoResults = e;
        console.log(e);
    }
    public typeaheadOnSelect(e:TypeaheadMatch):void {
        this.selectedSearchItem.emit(e.item);
        console.log('Selected value: ', e.value);
    }
}