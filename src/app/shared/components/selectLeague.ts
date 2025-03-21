import { Component } from "@angular/core";
import { SelectComponent } from "./select/select.component";

@Component({
  selector: 'select-league',
  template: `
    <div>
      <select-component />
    </div>
  `,
  imports: [SelectComponent],
})

export class SelectLeague{
  ligas = [
    {
      title: 'Serie A'
    },
    {
      title: 'Premier League'
    },
    {
      title: 'La Liga'
    },
    {
      title: 'Brasileirão'
    }
  ]
}
