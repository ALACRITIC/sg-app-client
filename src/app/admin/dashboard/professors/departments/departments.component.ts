import {Component, ViewEncapsulation, OnInit, Output , EventEmitter} from '@angular/core';
import {ProfessorsService} from "../../../../shared/services/professors.service";

@Component({
    selector: 'professor-departments',
    encapsulation: ViewEncapsulation.None,
    template: require('./departments.template.pug'),
})
export class AdminProfessorDepartments implements OnInit{
    departments:Array<String>;
    @Output() filteredDept = new EventEmitter<string>();

    constructor(private _profService:ProfessorsService) {
       
    }
    ngOnInit() {
        this._profService.departments().then(res => { this.departments = res;})
    }

    selectItem(department:string) {
        this.filteredDept.emit(department);
    }

}
