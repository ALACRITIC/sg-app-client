/**
 * Created by Taulant on 10/13/2016.
 */
import { Component } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { TypeaheadMatch } from '../../../components/typeahead/typeahead-match.class';
import {ProfessorsService} from "../../../../shared/services/professors.service";
import {Observable} from "../../Observable";


@Component({

    selector: 'professor-search',
    templateUrl: './professor-search.template.html'
})
export class ProfessorSearch  {
    public professors:any;
    public selected:string = '';
    public dataSource:Observable<any>;
    public asyncSelected:string = '';
    public typeaheadLoading:boolean = false;
    public typeaheadNoResults:boolean = false;

    public constructor(private _service:ProfessorsService) {

        this.dataSource = Observable.create((observer:any) => {
            observer.next(this.asyncSelected);
        }).mergeMap((token:string) => this._service.search(this.asyncSelected));
    }

    public changeTypeaheadLoading(e:boolean):void {
        this.typeaheadLoading = e;
    }

    public changeTypeaheadNoResults(e:boolean):void {
        this.typeaheadNoResults = e;
    }

    public typeaheadOnSelect(e:TypeaheadMatch):void {
        console.log('Selected value: ', e.value);
    }

}