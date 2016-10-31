import {Component, ViewEncapsulation, OnInit, Output , EventEmitter} from '@angular/core';
import {ProfessorsService} from "../../../../shared/services/professors.service";

@Component({
    selector: 'professor-departments',
    encapsulation: ViewEncapsulation.None,
    template: require('./departments.template.pug'),
    styleUrls:['./dept.style.css']
})
export class AdminProfessorDepartments implements OnInit{
    departments:Array<String>;
    @Output() filteredDept = new EventEmitter<string>();
    @Output() outputDepts = new EventEmitter();
    public selectDept:string = "Select a Department";
    public constructor(private _service:ProfessorsService) {
    }

    ngOnInit() {
        this._service.departments().then(res => {
            this.departments = res;
            this.departments.unshift("ShowAll");
            this.outputDepts.emit(this.departments);
        });
    }

    selectItem(department:string) {
        this.selectDept = department;
        this.filteredDept.emit(department);
    }

}
