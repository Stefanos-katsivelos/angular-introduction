import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Katsivelos';

  person0  = {
    givenName: 'Stefanos',
    surName: 'Katsivelos',
    age: 34,
    email: 'stef.katsivelos@gmail.gr',
    address: 'Athens, Greece'
  };

  person1 = {
    givenName: 'Brian',
    surName: 'Greene',
    age: 0x37,
    email: 'Brian.Greene@gmail.gr',
    address: 'New, York'
  }

 
}
