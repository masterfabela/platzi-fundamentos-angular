import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Jose Ramon';
  age = 18;
  img =
    'http://speed-new.com/wp-content/uploads/2015/07/2645457246456232546456457.jpg';
  btnDisabled = true;
  inputValue = this.name;
  person = {
    name: 'nicolas',
    age: 18,
    avatar:
      'https://www.happy-landing.net/wp-content/uploads/2020/09/avatar-2-tout-savoir.jpg',
  };
}
