import { Component } from '@angular/core';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'select-component',
  templateUrl: 'select.component.html',
  imports: [IonItem, IonList, IonSelect, IonSelectOption],
})
export class SelectComponent {}
