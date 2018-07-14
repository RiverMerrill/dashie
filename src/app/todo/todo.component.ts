import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public items = [];
  public showTodo = false;
  public itemExists;
  public newItem;

  constructor() { }

  ngOnInit() {
    const storedItems = JSON.parse(localStorage.getItem('todoItems'));
    const showTodo = JSON.parse(localStorage.getItem('showTodo'));
    if (storedItems) {
      this.items = storedItems;
    }
    if (showTodo) {
      this.showTodo = showTodo;
    }
  }

  toggleTodo() {
    this.showTodo = !this.showTodo;
    localStorage.setItem('showTodo', JSON.stringify(this.showTodo));

  }

  checkItem(item) {
    const storedItems = JSON.parse(localStorage.getItem('todoItems'));
    item.checked = !item.checked;
    storedItems.forEach(storedItem => {
      if (storedItem.value === item.value) {
        storedItem.checked = item.checked;
        localStorage.setItem('todoItems', JSON.stringify(storedItems));
        this.items = JSON.parse(localStorage.getItem('todoItems'));
      }
    });
  }

  addItem(item) {
    this.itemExists = '';
    this.items.forEach(value => {
      if (value.value === item) {
        console.log('exists');
        this.itemExists = this.newItem;
      }
    });
    if (!this.itemExists) {
      this.items.push({value: item, checked: false});
      this.newItem = '';
      localStorage.setItem('todoItems', JSON.stringify(this.items));
    }
  }

  removeItem(item) {
    for (let i = 0; i <= this.items.length - 1; i++) {
      if (this.items[i].value === item.value) {
        this.items.splice(i, 1);
      }
    }
    localStorage.setItem('todoItems', JSON.stringify(this.items));
  }

}
