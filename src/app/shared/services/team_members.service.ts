
import { Injectable, Inject } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Listing } from '../listing.model'
import 'rxjs/add/operator/toPromise';
import {TeamMember} from "../models/team_member.model";
import {QueryConstructor} from "../queryconstructor";
import { Observable } from 'rxjs/Rx';

@Injectable()

export class TeamMembersService {
    private authToken = localStorage.getItem('auth_token');
    private teamMembersUrl = this.api + '/team_members' ;

    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {
    }

    query(page:number, itemsPerPage: number) {
        return this.http.get(this.teamMembersUrl, {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<TeamMember>();

                listing.collection = body.Items as TeamMember[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(this.handleError);
    }

    get(id: number) {
        return this.http.get(this.teamMembersUrl + `/${id}`)
            .toPromise()
            .then(res => res.json() as TeamMember)
            .catch(this.handleError);
    }
    deleteMember(id: number) {
        let headers = new Headers({'Content-Type': 'application/json','Authorization':this.authToken});
        let url = `${this.teamMembersUrl}/${id}`;
        return this.http.delete(url, {headers: headers})
            .toPromise()
            .then(() => null)

    }
    addMember(member:TeamMember,file:File): Observable{
        return Observable.create(observer => {
            let formData: any = new FormData();
            let xhr:XMLHttpRequest = new XMLHttpRequest();

            formData.append("team_member[photo]",file);
            formData.append("team_member[name]",member.name);
            formData.append("team_member[title]",member.title);
            formData.append("team_member[description]",member.description);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }

            };

            xhr.open("POST", this.teamMembersUrl, true);
            xhr.setRequestHeader('Authorization', this.authToken);
            xhr.send(formData);
        });
    }
    updateMember(member:TeamMember,file:File,id:number): Observable{
        return Observable.create(observer => {
            let url = `${this.teamMembersUrl}/${id}`;
            let formData: any = new FormData();
            let xhr:XMLHttpRequest = new XMLHttpRequest();

            if(file !== undefined){

                formData.append("team_member[photo]",file);
            }


            formData.append("team_member[name]",member.name);
            formData.append("team_member[title]",member.title);
            formData.append("team_member[description]",member.description);


            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }

            };

            xhr.open("PUT", url , true);
            xhr.setRequestHeader('Authorization', this.authToken);
            xhr.send(formData);
        });
    }





}