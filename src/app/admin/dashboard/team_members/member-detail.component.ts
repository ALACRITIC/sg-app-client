/**
 * Created by Taulant on 10/4/2016.
 */
import { Component, OnInit,OnDestroy } from '@angular/core';
import {TeamMember} from "../../../shared/models/team_member.model";
import {TeamMembersService} from "../../../shared/services/team_members.service";
import { ActivatedRoute,Router } from '@angular/router';


@Component({
    selector: 'member-detail',
    templateUrl: './member-detail.template.html',
    providers:[TeamMembersService]
})
export class AdminMemberDetail implements OnInit,OnDestroy {
    public sub: any;
    public isEdit:boolean = false;
    public member:TeamMember;

    constructor(private _service:TeamMembersService, private _route:ActivatedRoute,private _router:Router) {
        this.member = new TeamMember();
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {

            this.loadMember(params['id'])
        })
    }


    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    private loadMember(id:number) {
        this._service.get(id).then(member => this.member = member);
    }
    updateMember($event) {
        this._service.updateMember($event.member,$event.photo,this.member.id).subscribe((res)=> {
            this.member = res;
            this.isEdit = false;
        });
    }
    deleteMember(member:TeamMember) {
        this._service
            .deleteMember(member.id)
            .then(() => this._router.navigate(['admin/dashboard/team_members']) );

    }
}