
import {Injectable, Inject} from "@angular/core";
import {Http,Headers,RequestOptions,Response} from "@angular/http";
import {QueryConstructor} from "../queryconstructor";
import {Listing} from "../listing.model";
import {Evaluation} from "../models/evaluation.model";


@Injectable()


export class EvaluationsService {

    private authToken = localStorage.getItem('auth_token');
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {}

    query(page:number, itemsPerPage: number, professor_id: number) {
        return this.http.get(this.api + `/professors/${professor_id}/evaluations` , {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<Evaluation>();

                listing.collection = body.Items as Evaluation[] ;
                listing.count = body.Count;


                return listing;
            } )
            .catch(this.handleError);
    }

    deleteEvaluation(professor_id:number,id:number){
        let headers = new Headers({'Content-Type': 'application/json','Authorization':this.authToken});
        return this.http.delete(this.api + `/professors/${professor_id}/evaluations` + `/${id}`,{headers: headers})
                .toPromise()
                .then(() => null)


    }
    addEvaluation(evaluation:Evaluation,professor_id:number){
        let headers = new Headers({'Content-Type': 'application/json'});
        let body = JSON.stringify(evaluation);
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.api + `/professors/${professor_id}/evaluations`, body, options)
            .toPromise()
            .then((res: Response) =>  res.json());
    }
}