import {Component, ViewEncapsulation, OnInit, Output , EventEmitter} from '@angular/core';
import {ProfessorsService} from "../../../../shared/services/professors.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from '../../../components/typeahead/typeahead-match.class';
import {EventEmitter} from "../../../../../../node_modules/@angular/common/src/facade/async";

@Component({
    selector: 'professor-departments',
    encapsulation: ViewEncapsulation.None,
    template: require('./departments.template.pug'),
})
export class AdminProfessorDepartments implements OnInit{
    departments:Array<String>;
    @Output() filteredDept = new EventEmitter<string>();
    @Output() outputDepts = new EventEmitter();

    public dataSource:Observable<any>;
    public asyncSelected:string = '';
    public typeaheadLoading:boolean = false;
    public typeaheadNoResults:boolean = false;

    public constructor(private _service:ProfessorsService) {
        this.dataSource = Observable.create((observer:any) => {
            observer.next(this.asyncSelected);
        }).mergeMap((token:string) => this._service.search('',token));
    }

    ngOnInit() {
        this._service.departments().then(res => {
            this.departments = res;
            this.outputDepts.emit(this.departments);
        });
    }

    selectItem(department:string) {
        this.filteredDept.emit(department);
        //console.log(departments);
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
        console.log('Selected value: ', e.value);
    }

}
