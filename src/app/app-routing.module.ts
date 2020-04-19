import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PubRessourceComponent } from './pub-ressource/pub-ressource.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './task/task.component';
import { TaskDescriptionComponent } from './task-description/task-description.component';
import { TaskSqlComponent } from './task-sql/task-sql.component';
import { TaskIhmComponent } from './task-ihm/task-ihm.component';
import { TaskJmsComponent } from './task-jms/task-jms.component';
import { TaskCleanTestComponent } from './task-clean-test/task-clean-test.component';
import { TaskTnrComponent } from './task-tnr/task-tnr.component';
import { TaskResultKshComponent } from './task-result-ksh/task-result-ksh.component';
import { TaskResultSqlComponent } from './task-result-sql/task-result-sql.component';
import { TaskFtpComponent } from './task-ftp/task-ftp.component';
import { TaskKshComponent } from './task-ksh/task-ksh.component';
import { GlobalTaskComponent } from './global-task/global-task.component';
import { TaskExecSqlComponent } from './task-exec-sql/task-exec-sql.component';

const routes: Routes = [
  {
    path: 'task', component: TaskComponent,
    children: [
      {
        path: 'ressource/:id',
        component: PubRessourceComponent
      },
      {
        path: 'ressourceDescription/:id',
        component: TaskDescriptionComponent
      },
      {
        path: 'sql/:id',
        component: TaskExecSqlComponent
      },
      {
        path: 'sqlResult/:id',
        component: TaskResultSqlComponent
      },
      {
        path: 'ihm/:id',
        component: TaskIhmComponent
      },
      {
        path: 'ksh/:id',
        component: TaskKshComponent
      },
      {
        path: 'kshResult/:id',
        component: TaskResultKshComponent
      },
      {
        path: 'jms/:id',
        component: TaskJmsComponent
      },
      {
        path: 'ftp/:id',
        component: TaskFtpComponent
      },
      {
        path: 'clean/:id',
        component: TaskCleanTestComponent
      },
      {
        path: 'tnr/:id',
        component: TaskTnrComponent
      },
      {
        path: 'description-test/:id',
        component: TaskDescriptionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

