import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private dragula: DragulaService) {
    dragula.setOptions('first-bag', {
      moves: function(el, container, handle) {
        return handle.className === 'handle';
      }
    });
   }
  ngOnInit() {

  }
}
