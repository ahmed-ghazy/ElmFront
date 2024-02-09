import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHttpInterceptorProviders } from './interceptors/interceptors';



@NgModule({
  imports: [
    CommonModule,  
  ],
  providers: [AppHttpInterceptorProviders],

  schemas: [],
})
export class CoreModule { }
