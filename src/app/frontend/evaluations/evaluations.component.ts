/**
 * Created by hgeorgiev on 9/10/16.
 */
import {Component, OnInit,ViewEncapsulation} from '@angular/core';
import {Listing} from "../../shared/listing.model";
import {Professor} from "../../shared/models/professor.model";
import {ProfessorsService} from "../../shared/services/professors.service";
import { Router } from '@angular/router';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [ProfessorsService],
    template: require('./evaluations.template.pug'),
    styleUrls:['./evaluations.styles.scss']
})

export class FrontProfessors implements OnInit {
    public listing:Listing<Professor>;
    public professor:Professor;
    public departments:Array<String>;
    public selectedDept:string;
    public currentPage:number = 1;

    constructor(private _service:ProfessorsService,private _router:Router) {}

    ngOnInit() {
        this.listing = new Listing<Professor>();
        this.loadProfessors(1, 10);
    };

    public pageChanged($event):void {
        this.loadProfessors($event.page, $event.itemsPerPage);
    };

    public filterDepts(department:string):void {

        //if Show All is selected return loading all the professors
        if(department === "All"){
            this.loadProfessors(1,10);
        } else {
            this.loadProfessors(1, 10, department);
        }

    }

    public goToProfessor($event){
        this._router.navigate([`professor/${$event.id}`]);
    }
    public goToProfile(professor:Professor){
        this._router.navigate(['/professor',  professor.id, professor.name.replace(/ /g, "_") ]);
    }

    //-------------fetching the list of departments through outputDepts event------------>
    public sideDepts($event){
       this.departments = $event;
    }

    loadDepartments(page:number,itemsPerPage:number,department?:string){
        if(department === "All"){
            this.loadProfessors(1,10);
        } else {
            this.loadProfessors(page,itemsPerPage,department);
            this.selectedDept = department;
        }

    }

    private loadProfessors(page:number, itemsPerPage:number, department?:string) {
        this._service.query(page, itemsPerPage, department).then(listing => {
            this.listing = listing as Listing<Professor>;
            this.currentPage = page;
        });
    }
}