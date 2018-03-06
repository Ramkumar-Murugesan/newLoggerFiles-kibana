import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    public baseUrl: string = "http://apps.geppettosoftware.com/logsfiles-web-10062";
    public browser_language: string;
}