import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello {{ name }}</h1>
<h2>keyup.enter</h2>
<p>
  <input type="text" (keyup.enter)="run($event)">
</p>

<h2>keyup</h2>
<p>
  <input type="text" (keyup)="run($event)">
</p>

`
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  run($event: any) {
    alert('You hit: ' + $event.keyCode);
  }
}
