import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    HttpClientModule
  ]
})
export class AuthModule { }
