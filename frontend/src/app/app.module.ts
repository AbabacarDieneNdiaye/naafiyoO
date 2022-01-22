import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatMessageComponent } from './private/components/chat-message/chat-message.component';
import { ChatRoomComponent } from './private/components/chat-room/chat-room.component';
import { CreateRoomComponent } from './private/components/create-room/create-room.component';
import { DashboardComponent } from './private/components/dashboard/dashboard.component';
import { SelectUsersComponent } from './private/components/select-users/select-users.component';
import { ChatServiceComponent } from './private/services/chat-service/chat-service.component';
import { LoginComponent } from './public/components/login/login.component';
import { RegisterComponent } from './public/components/register/register.component';
import { AuthServiceComponent } from './public/services/auth-service/auth-service.component';
import { UserServiceComponent } from './public/services/user-service/user-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatMessageComponent,
    ChatRoomComponent,
    CreateRoomComponent,
    DashboardComponent,
    SelectUsersComponent,
    ChatServiceComponent,
    LoginComponent,
    RegisterComponent,
    AuthServiceComponent,
    UserServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
