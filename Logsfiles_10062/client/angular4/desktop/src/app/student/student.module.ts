import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Save_screenengComponent } from './save_screeneng.component';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student.service';

@NgModule({
    declarations: [
        Save_screenengComponent
    ],
    imports: [
        MatInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'Save_screeneng', component: Save_screenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        StudentService
    ]
})

export class StudentModule {

}