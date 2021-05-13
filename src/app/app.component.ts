import { Component } from '@angular/core';
import {EventService} from './service/event.service';

import firebase from 'firebase/app';
import 'firebase/firestore';
const config = {
  apiKey: '',
  databaseURL: 'https://projetspring-89528-default-rtdb.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: EventService) {
    firebase.initializeApp(config);

  }
  title = 'ProjetSpring';


}
