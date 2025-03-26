import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectComponent } from './shared/components/select/select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, SelectComponent],
})
export class AppComponent {
  title = 'frontend';
}
