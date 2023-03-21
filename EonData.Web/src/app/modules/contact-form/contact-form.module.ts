import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageListComponent } from './components/message-list/message-list.component';
import { SendMessageFormComponent } from './components/send-message-form/send-message-form.component';
import { FormsModule } from '@angular/forms';
import { NewMessageNotificationComponent } from './components/new-message-notification/new-message-notification.component';



@NgModule({
  declarations: [
    MessageListComponent,
    SendMessageFormComponent,
    NewMessageNotificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SendMessageFormComponent,
    NewMessageNotificationComponent
  ]
})
export class ContactFormModule { }
