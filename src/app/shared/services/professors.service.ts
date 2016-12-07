
import { Injectable, Inject } from '@angular/core';
import { Http,Headers,Response,URLSearchParams } from '@angular/http';
import { Listing } from '../listing.model';
import {QueryConstructor} from '../queryconstructor';
import {Professor} from "../models/professor.model";
import { Observable } from 'rxjs/Rx';
import { handleError } from '../error_handler';

@Injectable()
export class ProfessorsService {
    private authToken = localStorage.getItem('auth_token');
    private professorsUrl = this.api + '/professors' ;

    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {

    }

    query(page:number, itemsPerPage: number, department?:string ) {
        let params = QueryConstructor(page, itemsPerPage);

        if(department) params.set('department' , department);

        return this.http.get(this.professorsUrl, {search:params })
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<Professor>();


                listing.collection = body.Items as Professor[] ;
                listing.count = body.Count;

                return listing;
            })
            .catch(handleError);
    }

    get(id?:number):Promise<Professor>{
        return this.http.get(this.professorsUrl + `/${id}`)
            .toPromise()
            .then(res => { return res.json() as Professor })
            .catch(handleError);
    }

    search(name:string){
        let params = new URLSearchParams();
            params.set('starts_with', name);
         return this.http.get(this.professorsUrl + `?`, {search: params})
                   .toPromise()
                   .then(res => {
                       let body = res.json();
                       let items = body.Items;

                       return  items;
                     });
    }

    departments():Promise<string[]> {
        return this.http.get(this.professorsUrl +'/departments')
            .toPromise()
            .then(res => {return res.json() as Array<string>})
            .catch(handleError);

    }

    deleteProfessor(id:string):Promise<any> {
        let headers = new Headers({'Content-Type': 'application/json','Authorization':this.authToken});
        let url = `${this.professorsUrl}/${id}`;
        return this.http.delete(url, {headers: headers})
            .toPromise()
            .then(() => null)

    }

    addProfessor(professor:Professor,file:File): Observable<any>{
        return Observable.create(observer => {
            let formData: any = new FormData();
            let xhr:XMLHttpRequest = new XMLHttpRequest();

            formData.append("professor[photo]",file);
            formData.append("professor[name]",professor.name);
            formData.append("professor[department]",professor.department);

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

            xhr.open("POST", this.professorsUrl, true);
            xhr.setRequestHeader('Authorization', this.authToken);
            xhr.send(formData);
        });
    }

    updateProfessor(professor:Professor,file:File,id:string): Observable<any>{
        return Observable.create(observer => {
            let url = `${this.professorsUrl}/${id}`;
            let formData: any = new FormData();
            let xhr:XMLHttpRequest = new XMLHttpRequest();

            if(file !== undefined){

                formData.append("professor[photo]",file);
            }

            formData.append("professor[name]",professor.name);
            formData.append("professor[department]",professor.department);


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