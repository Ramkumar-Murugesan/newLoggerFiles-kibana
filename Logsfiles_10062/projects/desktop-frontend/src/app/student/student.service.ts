import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IStudent } from './student';
import {  } from '..//';

@Injectable()
export class StudentService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Student(student: IStudent): Observable<IStudent>{
        return this.apiService.post(this.config.api_url+`/Student_Default_Activity/Student/`,student);

    }
    update_Student(student: IStudent): Observable<IStudent>{
        return this.apiService.put(this.config.api_url+`/Student_Default_Activity/Student/`,student);

    }
    search_for_update_Student(student_id: number): Observable<IStudent>{
        return this.apiService.get(this.config.api_url+`/Student_Default_Activity/Student/${student_id}`);

    }
    delete_Student(student: IStudent): Observable<IStudent>{
        return this.apiService.delete(this.config.api_url+`/Student_Default_Activity/Student/${student.id}`);

    }
    get_all_Student(): Observable<IStudent[]>{
        return this.apiService.get(this.config.api_url+`/Student_Default_Activity/Student/`);

    }
}