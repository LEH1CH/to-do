import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ProjectDescriptionPageComponent } from '../project-description-page/project-description-page.component';
import { TodoPageComponent } from '../todo-page/todo-page.component';
import { RegisterPageComponent } from '../register-page/register-page.component';

const routes: Routes = [
  { path: 'project-description', component: ProjectDescriptionPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'todo-list', component: TodoPageComponent },
  { path: '', redirectTo: '/project-description', pathMatch: 'full' },
  { path: '**', redirectTo: '/project-description' }
  // Добавьте другие маршруты здесь, если это необходимо
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
