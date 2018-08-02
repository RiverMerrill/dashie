import { TodoComponent } from './todo/todo.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
export class Components {
    public readonly todo =  { title: 'Todo', description: 'A simple Todo List', component: TodoComponent, selector: 'app-todo'};
    public readonly bitcoin = { title: 'Bitcoin', description: 'bitcoin tracker', component: BitcoinComponent, selector: 'app-bitcoin'};
    public list = [this.todo, this.bitcoin];
}
