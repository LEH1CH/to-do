import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { TodoService } from '../todo.service';

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'todo', component: TodoService },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  // Добавьте другие маршруты здесь, если это необходимо
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
