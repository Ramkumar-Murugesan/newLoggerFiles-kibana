import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { StudentService } from './student.service';
import { IStudent } from './student';
import {  } from '';

@Component({
    moduleId: module.id,
    templateUrl: 'save_screeneng.component.html'
})
export class Save_screenengComponent implements OnInit {
  private student: IStudent = {
  	id: 0,
  	name: 0
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private studentservice: StudentService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Student(){
      this.studentservice.create_Student(this.student)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}