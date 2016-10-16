/**
 * Created by Taulant on 10/13/2016.
 */
import { Component,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from '../../../components/typeahead/typeahead-match.class';
import {ProfessorsService} from "../../../../shared/services/professors.service";

@Component({
    selector: 'professor-search',
    templateUrl: './professor-search.template.pug'
})
export class ProfessorSearch  {
    @Output() selectedSearchItem = new EventEmitter();

    public dataSource:Observable<any>;
    public asyncSelected:string = '';
    public typeaheadLoading:boolean = false;
    public typeaheadNoResults:boolean = false;

    public constructor(private _service:ProfessorsService) {
        this.dataSource = Observable.create((observer:any) => {
            observer.next(this.asyncSelected);
        }).mergeMap((token:string) => this._service.search(token));
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