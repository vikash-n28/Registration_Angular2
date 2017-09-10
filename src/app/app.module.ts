import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'hammerjs';

//material
import {MD_PLACEHOLDER_GLOBAL_OPTIONS} from "@angular/material"

//externalFile
import { MaterialsModule } from "./materialModule";

// export class MaterialsModule {}
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdIconRegistry } from '@angular/material';

//Component
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

//services
import { DataSetrviceService } from './userRegister/services/data-setrvice.service';

@NgModule({
  declarations: [AppComponent,SignInComponent,SignUpComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MaterialsModule,
    ReactiveFormsModule,
    MaterialsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
  ],
  providers: [MdIconRegistry,DataSetrviceService,{provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'never'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
