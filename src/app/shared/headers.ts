/**
 * Created by Centroida-2 on 11/2/2016.
 */
import { Headers, RequestOptions } from '@angular/http';
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

export const HEADERS = options;