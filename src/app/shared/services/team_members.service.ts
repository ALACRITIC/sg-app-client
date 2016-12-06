
import { Injectable, Inject } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Listing } from '../listing.model'
import 'rxjs/add/operator/toPromise';
import {TeamMember} from "../models/team_member.model";
import {QueryConstructor} from "../queryconstructor";
import { Observable } from 'rxjs/Rx';
import {handleError} from '../error_handler'

@Injectable()

export class TeamMembersService {
    private authToken = localStorage.getItem('auth_token');
    private teamMembersUrl = this.api + '/team_members' ;

    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {
    }

    query(page:number, itemsPerPage: number):Promise<Listing<TeamMember>> {
        return this.http.get(this.teamMembersUrl, {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<TeamMember>();

                listing.collection = body.Items as TeamMember[] ;
                listing.count = body.Count;

                return listing;
            })
            .catch(handleError);
    }

    get(id: number):Promise<TeamMember> {
        return this.http.get(this.teamMembersUrl + `/${id}`)
            .toPromise()
            .then(res => res.json() as TeamMember)
            .catch(handleError);
    }
    deleteMember(id: number) {
        let headers = new Headers({'Content-Type': 'application/json','Authorization':this.authToken});
        let url = `${this.teamMembersUrl}/${id}`;
        return this.http.delete(url, {headers: headers})
            .toPromise()
            .then(() => null)

    }
    addMember(member:TeamMember,file:File): Observable<any>{
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
    updateMember(member:TeamMember,file:File,id:number): Observable<any>{
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