
import {Injectable, Inject} from "@angular/core";
import {Internship} from '../models/internship.model';
import {Http,Headers,Response } from "@angular/http";
import {QueryConstructor} from "../queryconstructor";
import {Listing} from "../listing.model";
import { Observable } from 'rxjs/Rx';
import {handleError} from "../error_handler";
@Injectable()


export class InternshipsService {
    private internshipsUrl = this.api + '/internships' ;
    private authToken = localStorage.getItem('auth_token');
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {}

    query(page:number, itemsPerPage: number):Promise<Listing<Internship>> {
        return this.http.get(this.internshipsUrl, {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<Internship>();

                listing.collection = body.Items as Internship[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(handleError);
    }

    get(id:number) {
        return this.http.get(this.internshipsUrl + `${id}`)
            .toPromise()
            .then(res => res.json() as Internship)
            .catch(handleError);
    }
    deleteInternship(id: number) {
        let headers = new Headers({'Content-Type': 'application/json','Authorization':this.authToken});
        let url = `${this.internshipsUrl}/${id}`;
        return this.http.delete(url, {headers: headers})
            .toPromise()
            .then(() => null)

    }

    addInternship(internship:Internship,file:File):Observable<any>{
        return Observable.create(observer => {
            let formData: any = new FormData();
            let xhr:XMLHttpRequest = new XMLHttpRequest();

            formData.append("internship[logo]",file);
            formData.append("internship[link]",internship.link);
            formData.append("internship[description]",internship.description);

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

            xhr.open("POST", this.internshipsUrl, true);
            xhr.setRequestHeader('Authorization', this.authToken);
            xhr.send(formData);
        });
    }
    updateInternship(internship:Internship,file:File,id:number): Observable<any>{
        return Observable.create(observer => {
            let url = `${this.internshipsUrl}/${id}`;
            let formData: any = new FormData();
            let xhr:XMLHttpRequest = new XMLHttpRequest();
            if(file !== undefined){

                formData.append("internship[logo]",file);
            }


            formData.append("internship[link]",internship.link);
            formData.append("internship[description]",internship.description);

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