import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PublicRoutingModule } from './public-routing.module';
import { MessagesComponent } from './components/messages/messages.component';
import { ListMessagesComponent } from './components/list-messages/list-messages.component';
import { ViewMessageComponent } from './components/view-message/view-message.component';
import { GetCountriesService } from './services/get-countries.service';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
     MessagesComponent,
     ListMessagesComponent,
     ViewMessageComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    GoogleMapsModule
  ],
  providers: [ GetCountriesService ]
})
export class PublicModule { }
