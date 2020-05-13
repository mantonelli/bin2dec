import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bin2dec';

  binValue: string = "0";
  decValue: string = "0";

  convert() {

    let value = 0;

    for (let i = 0; i < this.binValue.length; i++) {
      const p = parseInt(this.binValue[i], 10);
      value += p * p * Math.pow(2, (this.binValue.length - 1 < 0 ? 0 : this.binValue.length - 1) - i);
    }

    this.decValue = value.toString();

  }

  onKeyPress(event: any) {
    const pattern = /[0-1]/;
    const inputChar = String.fromCharCode((event as KeyboardEvent).charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

}
