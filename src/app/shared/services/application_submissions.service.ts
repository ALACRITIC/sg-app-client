import {Injectable, Inject} from "@angular/core";
import {Http,Headers,Response} from "@angular/http";
import {QueryConstructor} from "../queryconstructor";
import {Listing} from "../listing.model";
import {ApplicationSubmission} from "../models/application_submission.model";

@Injectable()


export class ApplicationSubmissionsService {
    private authToken = localStorage.getItem('auth_token');
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {}

    query(page:number, itemsPerPage: number, templateId: number) {
        return this.http.get(this.api + `/application_templates/${templateId}/application_submissions` , {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<ApplicationSubmission>();
                listing.collection = body.Items as ApplicationSubmission[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(this.handleError);
    }
    get(templateId:number,submissionId:number){
        return this.http.get(this.api + `/application_templates/${templateId}/application_submissions/${submissionId}`)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    deleteSubmission(templateId:number,submissionId:number) {
        let headers = new Headers({'Content-Type': 'application/json','Authorization':this.authToken});
        let url = this.api + `/application_templates/${templateId}/application_submissions/${submissionId}`;
        return this.http.delete(url, {headers: headers})
            .toPromise()
            .then(() => null)
    }





}