import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actionTodo from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  @ViewChild('txtInputFisico') txtInputFisic: ElementRef; //Hacer referencia mediante id al elemento

  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    // Cada vez que cambie el valor del check, disparamos la accion
    this.chkField.valueChanges.subscribe(() => {
      this.store.dispatch(new actionTodo.ToggleTodoAction(this.todo.id));
    });
  }

  editar() {
    this.editando = true;

    setTimeout(() => {
      this.txtInputFisic.nativeElement.select();
    });
  }

  terminarEdicion() {
    this.editando = false;

    if (!this.txtInput.invalid && this.txtInput.value !== this.todo.texto) {
      this.store.dispatch(
        new actionTodo.EditarTodoAction(
          this.todo.id,
          this.txtInputFisic.nativeElement.value
        )
      );
    }
  }

  borrarTodo() {
    this.store.dispatch(new actionTodo.BorrarTodoAction(this.todo.id));
  }

}
