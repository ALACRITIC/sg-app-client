/**
 * Created by Taulant on 9/26/2016.
 */
import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {Professor} from "../../../../common/models/professor.model";
import {ProfessorsService} from "../../../../common/services/professors.service";
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'professor-form',
    templateUrl: './professor-form.template.html',
    providers: [ProfessorsService],

})
export class ProfessorFormComponent implements OnInit {
    @Output() onAdded = new EventEmitter<Professor>();
    public professor:Professor;

    constructor(private _service:ProfessorsService) {
        this.professor = new Professor();
    }

    ngOnInit() {
    }
    addProfessor(){
        this._service.addProfessor(this.professor)
            .subscribe(
                data =>{
                   this.onAdded.emit(data);


            })
    }
}