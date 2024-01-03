import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ware-house',
  standalone: true,
  imports: [ RouterOutlet ],
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrl: './ware-house.component.scss'
})
export class WareHouseComponent {

}
