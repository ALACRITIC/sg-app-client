/**
 * Created by Taulant on 9/29/2016.
 */
import { Component, OnInit } from '@angular/core';
import {ClubsService} from "../../shared/services/clubs.service";
import { ActivatedRoute,Router } from '@angular/router';
import {Club} from "../../shared/models/club.model";

@Component({
    selector: 'club-profile',
    templateUrl: 'club-profile.template.pug'
})
export class FrontClubProfile implements OnInit {
    public club:Club;
    public sub:any;
    constructor(private _service:ClubsService, private _route:ActivatedRoute) {
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
}