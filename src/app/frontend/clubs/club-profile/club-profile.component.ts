/**
 * Created by Taulant on 9/29/2016.
 */
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {ClubsService} from "../../../shared/services/clubs.service";
import { ActivatedRoute } from '@angular/router';
import {Club} from "../../../shared/models/club.model";

@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'club-profile',
    template:require ('./club-profile.template.pug'),
    styles:require(['./club-profile.styles.scss'])
})

export class FrontClubProfile implements OnInit {
    public club:any;
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