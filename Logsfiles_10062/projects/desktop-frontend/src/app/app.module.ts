import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDirective } from './home/home.directive';
import { HeaderComponent } from './header/header.component';
import { HeaderDirective } from './header/header.directive';
import { FooterComponent } from './footer/footer.component';
import { FooterDirective } from './footer/footer.directive';
import { SharedService } from './shared/shared.service';
import { ConfigService } from './config/config.service';
import { ApiService } from './config/api.service';
import { customHttpProvider } from './_helpers/custom-http';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { MatInputModule } from '@angular/material';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AuthService } from './login/auth.service';
import { AuthGuard } from '././login/auth.guard';
import { StudentModule } from './student/student.module';
import { HeaderENComponent } from './header/header-en.component';
import { HeaderTAComponent } from './header/header-ta.component';
import { HeaderESComponent } from './header/header-es.component';
import { FooterENComponent } from './footer/footer-en.component';
import { FooterTAComponent } from './footer/footer-ta.component';
import { FooterESComponent } from './footer/footer-es.component';
import { HomeENComponent } from './home/home-en.component';
import { HomeTAComponent } from './home/home-ta.component';
import { HomeESComponent } from './home/home-es.component';
import { LoginComponent } from '././login/login.component';
import { LoginPageComponent } from '././login/login_page.component';
import {loggerModule} from './logger/log.module'
@NgModule({
  imports: [ 
    BrowserModule,
    Ng2Bs3ModalModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
     { path: 'home', component: HomeComponent ,canActivate: [AuthGuard]},
     { path: 'login', component: LoginComponent},

     { path: 'login_page', component: LoginPageComponent},


     { path: '', redirectTo: 'home', pathMatch: 'full'},
     { path: '**', redirectTo: 'home', pathMatch: 'full'}


    ])
   ,
   StudentModule,
   loggerModule

  ],
  providers: [
  AuthService,
  AuthGuard,
    SharedService,
    ConfigService,
    ApiService,
    customHttpProvider
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeDirective,
    HeaderDirective,
    FooterDirective,
HeaderENComponent,
HeaderTAComponent,
HeaderESComponent,
FooterENComponent,
FooterTAComponent,
FooterESComponent,
HomeENComponent,
HomeTAComponent,
HomeESComponent,
LoginComponent,
LoginPageComponent
  ],
  entryComponents: [
    HeaderENComponent,
    HeaderTAComponent,
    HeaderESComponent,
    FooterENComponent,
    FooterTAComponent,
    FooterESComponent,
    HomeENComponent,
    HomeTAComponent,
    HomeESComponent,
    LoginComponent,
    LoginPageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }