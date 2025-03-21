import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectLeague } from './shared/components/selectLeague';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, SelectLeague],
})
export class AppComponent {
  title = 'frontend';
}
