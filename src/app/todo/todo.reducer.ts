import * as todoActions from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Vencer a Thor');
todo2.completado = true;
const todo3 = new Todo('Vencer a Hulk');

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(
  state = estadoInicial,
  action: todoActions.Acciones
): Todo[] {
  switch (action.type) {
    // Agregar elemento a la lista
    case todoActions.AGREGRAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo]; // Clonamos el array y agregamos el nuevo

    // Registrar como completado
    case todoActions.TOGGLE_TODO:
      return state.map((todoEdit) => {
        // .map es como un forEach y lo q se retorna conforma nuevo array
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit, // Clona las propiedades del objeto menos las especificadas
            completado: !todoEdit.completado,
          };
        } else {
          return todoEdit;
        }
      });

    // Registrar todas tareas como completadas
    case todoActions.TOGGLE_ALL_TODO:
      return state.map((todoEdit) => {
        return {
          ...todoEdit,
          completado: action.completado
        };
      });

    // Editar tarea
    case todoActions.EDITAR_TODO:
      return state.map((todoEdit) => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.txt,
          };
        } else {
          return todoEdit;
        }
      });

    // Borrar tarea
    case todoActions.BORRAR_TODO:
      return state.filter((element) => element.id !== action.id);

    // Borrar tarea
    case todoActions.CLEAR_ALL_TODO:
      return state.filter((element) =>  !element.completado);

    default:
      return state;
  }
}
