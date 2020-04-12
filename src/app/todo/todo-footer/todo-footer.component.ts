import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { filtrosValidos, SetFiltroAction } from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { ClearAllTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: filtrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.countPeding(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(filtro: filtrosValidos) {
    this.store.dispatch(new SetFiltroAction(filtro));
  }

  countPeding(todos: Todo[]){
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  clearTodo() {
    this.store.dispatch(new ClearAllTodoAction());
  }

}
