/**
 * Created by Taulant on 9/28/2016.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import {ClubsService} from "../../../shared/services/clubs.service";
import {Club} from "../../../shared/models/club.model";


@Component({

    selector: 'club-detail',
    templateUrl: './club-detail.template.html'

})
export class AdminClubDetail implements OnInit {
    public sub:any;
    public club:Club;
    public isEdit:boolean = false;

    constructor(private _service:ClubsService,private _router:Router, private _route:ActivatedRoute) {
        this.club = new Club();
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.loadClub(params['id']);
        });

    }

    private loadClub(id:number){
        this._service.get(id).then((club)=> this.club = club);

    }

    deleteClub() {
        this._service
            .deleteClub(this.club.id)
            .then(() => this._router.navigate(['admin/dashboard/clubs']));

    }

    updateClub($event){
        this._service.updateClub($event.club,$event.logo,this.club.id).subscribe((res) =>
        this.club = res);
    }
}