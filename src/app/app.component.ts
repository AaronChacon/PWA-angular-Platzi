import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /* installEvent;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeiInstallPrompt(event: Event){
    event.preventDefault();
    console.log(event);
    this.installEvent = event
  }

  installByUser() {
    if (this.installEvent ) {
      this.installEvent.prompt();
      this.installEvent.userChoise()
      .then(rta => {
        console.log(rta);
      });
    }
  } */

}