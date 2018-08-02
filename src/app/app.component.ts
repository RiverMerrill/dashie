import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Components } from './components';
import 'rxjs/add/operator/map';


declare let Packery: any;
declare let Draggabilly: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'app';
  public components = new Components;
  public componentList;
  public pckry;
  public edit = true;
  public widgets = ['todo', 'weather'];

  constructor() { }
  ngOnInit() {
     this.componentList = this.components.list;
   }
  ngAfterContentInit() {
    window.setTimeout(() => {
    let order: any;
    order = localStorage.getItem('itemsShiftPositions');
    const grid = document.querySelector('.row');
    const pckry = new Packery(grid, {
      itemSelector: '.col-md-3',
      columnWidth: grid.querySelectorAll('.col-md-3')[0],
      shiftPercentResize: true,
      percentPosition: true,
      initLayout: false
    });
    this.pckry = pckry;
    pckry.getItemElements().forEach(item => {
      const draggie = new Draggabilly(item, {
        handle: '.handle'
      });
      pckry.bindDraggabillyEvents(draggie);
    });
    if (order) {
      order = JSON.parse(order);
      console.log(order);
      pckry._resetLayout();
      pckry.items = order.map(itemPosition => {
        const itemElem = grid.querySelector('[data-item-id="' + itemPosition.id + '"]');
        const item = pckry.getItem(itemElem);
        item.rect.x = parseFloat(itemPosition.x) * pckry.packer.width;
        return item;
      });
      pckry.shiftLayout();
    } else {
      pckry.layout();
    }
    pckry.on('dragItemPositioned', _ => this.savePositions(pckry));
  }, 1000);
  }
  savePositions(pckry) {
    const positions = this.getItemsShiftPositions(pckry);
    localStorage.setItem('itemsShiftPositions', JSON.stringify(positions));
  }
  toggleEdit() {
    this.edit = !this.edit;
    const handles = Array.from(document.querySelectorAll('.handle'));
    if (this.edit) {
      handles.forEach(handle => {
        handle['style'].display = 'block';
      });
    } else {
    handles.forEach(handle => {
      handle['style'].display = 'none';
    });
  }
  }
  getItemsShiftPositions(pckry) {
    return pckry.items.map(function (item) {
      return {
        id: item.element.getAttribute('data-item-id'),
        x: item.rect.x / pckry.packer.width
      };
    });
  }
}
