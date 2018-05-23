import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


@Injectable()
export class ValidateService {
    authToken: any;
    user: any;
    constructor(private http: Http) { }
}
