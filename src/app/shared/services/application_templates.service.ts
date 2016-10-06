

import { Injectable, Inject } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Listing } from '../listing.model'
import { QueryConstructor} from '../queryconstructor'
import 'rxjs/add/operator/toPromise';
import {ApplicationTemplate} from "../models/application_template.model";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApplicationTemplatesService {
    private authToken = localStorage.getItem('auth_token');
    private applicationTemplatesUrl = this.api + '/application_templates' ;
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {
    }

    query(page:number, itemsPerPage: number) {
        return this.http.get(this.applicationTemplatesUrl, {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<ApplicationTemplate>();

                listing.collection = body.Items as ApplicationTemplate[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(this.handleError);
    }

    get(id:number) {
        return this.http.get(this.applicationTemplatesUrl + `/${id}`)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    deleteApplicationTemplate(id: number) {
        let headers = new Headers({'Content-Type': 'application/json','Authorization':this.authToken});
        let url = `${this.applicationTemplatesUrl}/${id}`;
        return this.http.delete(url, {headers: headers})
            .toPromise()
            .then(() => null)

    }
    addApplicationTemplate(application_template:ApplicationTemplate,file:File): Observable{
        return Observable.create(observer => {
            let formData: any = new FormData();
            let xhr:XMLHttpRequest = new XMLHttpRequest();

            formData.append("application_template[name]",application_template.name);
            formData.append("application_template[description]",application_template.description);
            formData.append("application_template[document]",file);
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

            xhr.open("POST", this.applicationTemplatesUrl, true);
            xhr.setRequestHeader('Authorization', this.authToken);
            xhr.send(formData);
        });
    }

    updateApplicationTemplate(application_template:ApplicationTemplate,file:File,id:number): Observable{
        return Observable.create(observer => {
            let url = `${this.applicationTemplatesUrl}/${id}`;
            let formData: any = new FormData();
            let xhr:XMLHttpRequest = new XMLHttpRequest();

            formData.append("application_template[name]",application_template.name);
            formData.append("application_template[description]",application_template.description);
            if(file !== undefined){

                formData.append("application_template[document]",file);
            }
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

            xhr.open("PUT", url, true);
            xhr.setRequestHeader('Authorization', this.authToken);
            xhr.send(formData);
        });
    }


    
}