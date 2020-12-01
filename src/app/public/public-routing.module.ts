import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetMessagesService } from './services/get-messages.service';
import { MessagesComponent } from './components/messages/messages.component';

const routes: Routes = [
    {path: '', component: MessagesComponent, resolve: { messages: GetMessagesService } }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [ GetMessagesService ]
})
export class PublicRoutingModule { }
