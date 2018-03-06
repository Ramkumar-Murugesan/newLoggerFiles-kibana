import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';

@Injectable()
export class loggerService {
    constructor(private _http : Http, private config : ConfigService , private apiService : ApiService){}

    create_Log(logs : any) :Observable<any>{
        console.log("--->>> createLogs---->>",logs)
     return this.apiService.post(this.config.api_url + '/loggerDetails/createLog',logs);
    }
   
    getLogLevel():Observable<any>{
        return this.apiService.get(this.config.api_url+'/loggerDetails/getLogger');
    }
}
