import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


@Injectable()
export class AuthService {
    authToken: any;
    user: any;
    constructor(private http: Http) { }
}
