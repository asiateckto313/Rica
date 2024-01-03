import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu-item-list',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './menu-item-list.component.html',
  styleUrl: './menu-list.style.scss'
})
export class MenuItemList {
  @Input() item: any = {};
  @Input() items: [] | undefined;
 
}
