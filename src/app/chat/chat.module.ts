import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatPage } from './chat.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ChatPageRoutingModule  } from './chat-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ChatPage }]),
    ChatPageRoutingModule ,
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
