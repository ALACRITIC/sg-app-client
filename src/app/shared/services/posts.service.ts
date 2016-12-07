/**
 * Created by hgeorgiev on 8/26/16.
 */


import { Injectable, Inject } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Listing } from '../listing.model'
import { QueryConstructor} from '../queryconstructor'
import {Post} from "../models/post.model";
import {Observable} from 'rxjs/Rx';
import {handleError} from "../error_handler";

@Injectable()
export class PostsService {
    private authToken = localStorage.getItem('auth_token');
    private postsUrl = this.api + '/posts' ;

    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {
    }

    //get all POSTS
    query(page:number, itemsPerPage: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers ,search:  QueryConstructor(page, itemsPerPage) });
        return this.http.get(this.postsUrl,options)
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<Post>();

                listing.collection = body.Items as Post[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(handleError);
    }
    //get Featured
    getFeatured(page:number, itemsPerPage: number):Promise<Post[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers , search: QueryConstructor(page, itemsPerPage)});
        return this.http.get(this.postsUrl + '/featured',options)
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch(handleError);
    }

    getRegular(page:number, itemsPerPage: number):Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers , search:QueryConstructor(page, itemsPerPage)});
        return this.http.get(this.postsUrl + '/regular',options)
            .map((res) => res.json())
    }

    //get POST
    get(id:string):Promise<Post> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.postsUrl + `/${id}`,options)
            .toPromise()
            .then(res => res.json())
            .catch(handleError);
    }
    deletePost(id: number):Promise<any> {
        let headers = new Headers({'Content-Type': 'application/json','Authorization':this.authToken});
        let url = `${this.postsUrl}/${id}`;
        return this.http.delete(url, {headers: headers})
            .toPromise()
            .then(() => null)

    }


    //post POST
    save(post:Post , file:File, fileName:string): Observable<any>  {

        return Observable.create(observer =>  {
                    let formData: any = new FormData();
            let xhr:XMLHttpRequest = new XMLHttpRequest();
                    formData.append("post[image]", file, fileName);
                    formData.append("post[title]", post.title);
                    formData.append("post[content]", post.content);
                    formData.append("post[featured]", post.featured);
                    formData.append("post[styles]" , post.styles);
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


                    xhr.open("POST", this.postsUrl, true);
                    xhr.setRequestHeader('Authorization', this.authToken);
                    xhr.send(formData);
                });
            }
    edit(post:Post , file:File,fileName:string, id:number): Observable<any>  {

        return Observable.create(observer =>  {
            let formData: any = new FormData();
            let url = `${this.postsUrl}/${id}`;
            let xhr:XMLHttpRequest = new XMLHttpRequest();


                formData.append("post[image]", file,fileName);


            formData.append("post[title]", post.title);
            formData.append("post[content]", post.content);
            formData.append("post[featured]", post.featured);
            formData.append("post[styles]" , post.styles);
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