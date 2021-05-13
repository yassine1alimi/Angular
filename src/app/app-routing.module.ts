import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';
import {UpdateEventComponent} from './update-event/update-event.component';
import {LoginComponent} from './login/login.component';
import {RoomlistComponent} from './roomlist/roomlist.component';
import {AddroomComponent} from './addroom/addroom.component';
import {ChatroomComponent} from './chatroom/chatroom.component';
import {ProductComponent} from './product/product.component';
import {StatistiqueComponent} from './statistique/statistique.component';
import {DocComponent} from './doc/doc.component';


const routes: Routes = [
  {path: 'event', component : EventsComponent},
  {path: 'add-event', component : AddEventComponent},
  {path: 'updateEvent/:ide',  component: UpdateEventComponent},
  { path: 'login', component: LoginComponent },
  { path: 'roomlist', component: RoomlistComponent },
  { path: 'addroom', component: AddroomComponent },
  { path: 'chatroom/:roomname', component: ChatroomComponent },
  { path: 'product', component: ProductComponent },
  { path: 'stat', component: StatistiqueComponent },
  { path: 'doc', component: DocComponent },


  { path: '',
    redirectTo: '/event',
    pathMatch: 'full'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
