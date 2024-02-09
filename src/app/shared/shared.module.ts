import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';



const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  ListComponent
];


@NgModule({
  declarations: [[...COMPONENTS]],
  exports:[
    [...COMPONENTS],
    FormsModule,
    ToastrModule,
    CoreModule,
    HttpClientModule,  
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
