import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  totalScroll = 100;
  scrollValue = 0;
  person = {
    name: 'nicolas',
    age: 18,
    avatar:
      'https://www.happy-landing.net/wp-content/uploads/2020/09/avatar-2-tout-savoir.jpg',
  };
  img =
    'http://speed-new.com/wp-content/uploads/2015/07/2645457246456232546456457.jpg';
  btnDisabled = true;
  inputValue = this.person.age;

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  incrementAge() {
    this.person.age++;
  }

  onBoxScroll(event: Event) {
    const element = event.target as HTMLElement;
    this.totalScroll = element.scrollHeight - element.clientHeight;
    this.scrollValue = element.scrollTop;
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
