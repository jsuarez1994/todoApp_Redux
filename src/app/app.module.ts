import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
// FROMS
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducers } from './app.reducers';
import { FilperPipe } from './filter/filper.pipe';
import { FooterComponent } from './footer/footer.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoAddComponent,
    FilperPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot( appReducers ), // indicar el reducer a tratar
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
