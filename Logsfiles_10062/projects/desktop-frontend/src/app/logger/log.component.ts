import { isBoolean } from 'util';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
// import {ILogs} from './log';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {loggerService} from './log.service'

@Component({
    moduleId : module.id,
    templateUrl : 'log.component.html'
})

export class LogComponent implements OnInit {

    private selectLevel : any ;
    private selectedLogs = {} ;
    // private defaultLog : boolean;
    // private customLog : boolean;
    constructor( private router: Router, public toastr: ToastsManager, private logservice: loggerService, vcr: ViewContainerRef){
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.initialize();
    }
 initialize(){
    this.selectedLogs = {};
    this.selectLevel = [
        {level : "debug"},
        {level : "info"},
        {level : "warn"},
        {level : "error"}
    ]
    this.getLogLevel();
    // this.customLog = false;
    // this.defaultLog = false;
    // var logs = localStorage.getItem("loglevel");
    // console.log("loglevel information------>>> ",logs)
//     if(logs === null || logs === undefined){
//         this.defaultLog = true;
//         this.selectedLogs = {level : "info"}
//     }
//     else{
//         this.customLog = true;
//         console.log("else part log level--->>>",JSON.parse(logs))
//         this.selectedLogs = JSON.parse(logs);
//     }
    
 }

 getLogLevel() {
 this.logservice.getLogLevel().subscribe(
     data => {
         console.log("success data of log level is -->> ",data);
         this.selectedLogs = data;
     },
     error => {
      this.toastr.error("cannot get the logger level information");
     }
 )
 }
 saveLog(){
this.logservice.create_Log(this.selectedLogs).subscribe(
    data => {
        this.toastr.success("saved successfully");
        console.log("save logs information-------->>",this.selectedLogs)
    
        // level = this.selectedLogs.level;
        // localStorage.setItem("loglevel",JSON.stringify(this.selectedLogs));
        // this.router.navigate(['/Home'])
    
    },
    error => {
        this.toastr.error("cannot save the logger details")
    }
)
 }
 cancelLog() {

 }
}