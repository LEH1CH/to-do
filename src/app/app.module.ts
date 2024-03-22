import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app/models/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { TodoService } from './todo.service';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProjectDescriptionPageComponent } from './project-description-page/project-description-page.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoSearchComponent,
    LoginPageComponent,
    ProjectDescriptionPageComponent,
    TodoPageComponent,
  ],
  imports: [FormsModule, BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
