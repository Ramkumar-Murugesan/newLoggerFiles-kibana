


import {NgModule}  from '@angular/core';
import {RouterModule} from '@angular/router';
import {LogComponent} from './log.component';
import {MatInputModule , MatSelectModule} from '@angular/material';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {loggerService} from './log.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    declarations: [
        LogComponent
    ],
    imports: [
        MatInputModule,
        FormsModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatButtonModule,
        RouterModule.forChild([
            {path: 'loggerScreen' , component: LogComponent}
        ])
],
providers: [
    loggerService
]
})
export class loggerModule {

}