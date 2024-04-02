import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Katsivelos';

  person = {
    givenName: 'Stefanos',
    surName: 'Katsivelos',
    age: 34,
    email: 'stef.katsivelos@gmail.gr'
  }
}
