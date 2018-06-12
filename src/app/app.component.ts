import { Component } from '@angular/core';
import { Message } from './models/message';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Projeto Daycare';

  public message : Message;
  public messages : Message[];


  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Welcome to chatbot universe', 'assets/images/bot.png', new Date())
    ];
  }

}
