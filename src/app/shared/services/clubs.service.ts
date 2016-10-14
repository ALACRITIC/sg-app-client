/**
 * Created by hgeorgiev on 8/19/16.
 */

import { Injectable, Inject } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Club } from '../models/club.model';
import { Listing } from '../listing.model'
import { QueryConstructor} from '../queryconstructor'
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class ClubsService {
    private authToken = localStorage.getItem('auth_token');
    private clubsUrl = this.api + '/clubs' ;
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {
    }

    query(page:number, itemsPerPage: number) {
        return this.http.get(this.clubsUrl, {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<Club>();

                listing.collection = body.Items as Club[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(this.handleError);
    }

    get(id:number) {
        return this.http.get(this.clubsUrl + `/${id}`)
            .toPromise()
            .then(res => res.json() as Club)
            .catch(this.handleError);
    }
    deleteClub(id: number) {
        let headers = new Headers({'Content-Type': 'application/json','Authorization':this.authToken});
        let url = `${this.clubsUrl}/${id}`;
        return this.http.delete(url, {headers: headers})
            .toPromise()
            .then(() => null );

    }
    addClub(club:Club,file:File,professor_id:number): Observable{

        return Observable.create(observer => {
            let formData: any = new FormData();
            let xhr:XMLHttpRequest = new XMLHttpRequest();

            formData.append("club[logo]",file);
            formData.append("club[name]",club.name);
            formData.append("club[president]",club.president);
            formData.append("club[professor_id]",professor_id);

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

            xhr.open("POST", this.clubsUrl, true);
            xhr.setRequestHeader('Authorization', this.authToken);
            xhr.send(formData);
        });
    }
    updateClub(club:Club,file:File,id:number): Observable{
        let url = `${this.clubsUrl}/${id}`;
        return Observable.create(observer => {
            let formData: any = new FormData();
            let xhr:XMLHttpRequest = new XMLHttpRequest();
            if(file !== undefined){
                formData.append("club[logo]",file);
            }

            formData.append("club[name]",club.name);
            formData.append("club[president]",club.president);
            formData.append("club[professor_id]",club.professor_id);


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

            xhr.open("PUT",url , true);
            xhr.setRequestHeader('Authorization', this.authToken);
            xhr.send(formData);
        });
    }
}