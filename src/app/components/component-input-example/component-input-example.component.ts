import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {

  person0: Person = {
    givenName: 'Stefanos',
    surName: 'Katsivelos',
    age: 34,
    email: 'stef.katsivelos@gmail.gr',
    address: 'Athens, Greece'
  };

  person1: Person = {
    givenName: 'Brian',
    surName: 'Greene',
    age: 0x37,
    email: 'Brian.Greene@gmail.gr',
    address: 'New, York'
  }
}
