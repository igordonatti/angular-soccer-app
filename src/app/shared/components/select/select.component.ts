import { Component } from '@angular/core';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { ApiService } from '../../core/services/api.service';
import { League } from '../../core/models/league.model';

@Component({
  selector: 'select-component',
  templateUrl: 'select.component.html',
  imports: [IonItem, IonList, IonSelect, IonSelectOption],
})
export class SelectComponent {
  leagues$!: League[];

  constructor(private apiAservice: ApiService) {}

  ngOnInit(): void {
    this.apiAservice.getLeagues().subscribe((response) => {
      console.log(response.data);
      this.leagues$ = response.data;
    });
  }
}
