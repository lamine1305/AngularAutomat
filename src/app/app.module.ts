import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
//Import des modules http et formulaire//
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { PubRessourceComponent } from './pub-ressource/pub-ressource.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavContainer } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './task/task.component';
import { TaskDescriptionComponent } from './task-description/task-description.component';
import { TaskSqlComponent } from './task-sql/task-sql.component';
import { TaskIhmComponent } from './task-ihm/task-ihm.component';
import { TaskKshComponent } from './task-ksh/task-ksh.component';
import { TaskFtpComponent } from './task-ftp/task-ftp.component';
import { TaskExecSqlComponent } from './task-exec-sql/task-exec-sql.component';
import { TaskJmsComponent } from './task-jms/task-jms.component';
import { TaskTnrComponent } from './task-tnr/task-tnr.component';
import { TaskCleanTestComponent } from './task-clean-test/task-clean-test.component';
import { TaskResultSqlComponent } from './task-result-sql/task-result-sql.component';
import { TaskResultKshComponent } from './task-result-ksh/task-result-ksh.component';
import { GlobalTaskComponent } from './global-task/global-task.component';
import { IntegralUIModule } from '@lidorsystems/integralui-web/bin/integralui/integralui.module';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,     
    PubRessourceComponent,
    SidenavComponent, TaskComponent, TaskDescriptionComponent, TaskSqlComponent, TaskIhmComponent, TaskKshComponent, TaskFtpComponent, TaskExecSqlComponent, TaskJmsComponent, TaskTnrComponent, TaskCleanTestComponent, TaskResultSqlComponent, TaskResultKshComponent, GlobalTaskComponent
  ],
  imports: [
    ChartsModule, 
    IntegralUIModule,
    HttpClientModule, 
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatMenuModule,
    DragDropModule,
    BrowserAnimationsModule    
    ],
  providers: [

    MatSidenavContainer
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
