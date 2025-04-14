import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bgColor = 'lightblue';
  textColor = 'white';

  getStyles() {
    return {
      'background-color': this.bgColor,
      'color': this.textColor,
      'padding': '15px',
      'border-radius': '8px',
      'font-size': '18px'
    };
  }
}
