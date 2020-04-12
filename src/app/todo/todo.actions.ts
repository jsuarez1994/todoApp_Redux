import { Action } from '@ngrx/store';

export const AGREGRAR_TODO = '[TODO] ADD-TODO';
export const TOGGLE_TODO = '[TODO] TOGGLE-TODO';
export const EDITAR_TODO = '[TODO] EDITAR-TODO';
export const BORRAR_TODO = '[TODO] BORRAR-TODO';
export const TOGGLE_ALL_TODO = '[TODO] TOGGLE-ALL-TODO';
export const CLEAR_ALL_TODO = '[TODO] CLEAR-ALL-TODO';

export class AgregarTodoAction implements Action {
  readonly type = AGREGRAR_TODO;
  constructor(public texto: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public id: number) {}
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;
  constructor(public id: number, public txt: string) {}
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;
  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;
  constructor(public completado: boolean) {}
}

export class ClearAllTodoAction implements Action {
  readonly type = CLEAR_ALL_TODO;
}

// Acciones que se puedan realizar
export type Acciones =
  | AgregarTodoAction
  | ToggleTodoAction
  | EditarTodoAction
  | BorrarTodoAction
  | ToggleAllTodoAction
  | ClearAllTodoAction;
