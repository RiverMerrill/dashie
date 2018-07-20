import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public pckry;

  constructor(private dragula: DragulaService) { }
  ngOnInit() {
    let order = localStorage.getItem('itemsShiftPositions');
    const grid = document.querySelector('.row');
    const pckry = new Packery(grid, {
      itemSelector: '.col-md-3',
      columnWidth: '.col-md-3',
      transitionDuration: '0.3s',
      shiftPercentResize: true,
      percentPosition: true,
      initLayout: false
    });
    this.pckry = pckry;
    pckry.getItemElements().forEach(item => {
      const draggie = new Draggabilly(item);
      pckry.bindDraggabillyEvents(draggie);
    });
    if (order) {
      order = JSON.parse(order);
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
  }
  savePositions(pckry) {
    const positions = this.getItemsShiftPositions(pckry);
    localStorage.setItem('itemsShiftPositions', JSON.stringify(positions));
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
