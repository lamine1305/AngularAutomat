import { Component, OnInit } from '@angular/core';
import { ModeleTaskSql } from '../modele/modeleTaskSql';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ServiceTaskService } from '../service/service-task.service';

@Component({
  selector: 'app-task-exec-sql',
  templateUrl: './task-exec-sql.component.html',
  styleUrls: ['./task-exec-sql.component.css']
})
export class TaskExecSqlComponent implements OnInit {
  currentId : string;
  public taskExecSql  :ModeleTaskSql  ;
 
  constructor(private router: Router, private serviceTaskService: ServiceTaskService, public route: ActivatedRoute) {
  }
    ngOnInit() {
    this.taskExecSql = new ModeleTaskSql();
      this.route.params.subscribe(params => {
      this.currentId = params.id;
      const temp = this.serviceTaskService.getTaskExecSqlById( this.currentId);

      if (temp) {

       // alert("nomTest="+ temp.nomTest);
        
        this.taskExecSql.identifiant = temp.identifiant;
        this.taskExecSql.requete = temp.requete;
        
       // this.separateur=temp.separateur;
      } else {
        this.router.navigate(['task']);
      }
    });

  }

  retour() {
    this.taskExecSql.identifiant = this.currentId;
    this.serviceTaskService.addTaskEexecSql(this.taskExecSql);
    this.serviceTaskService.donneesXml =this.serviceTaskService.donneesXml
                                       +this.taskExecSql.toXML() ;
    this.router.navigate(['task']);
  }

  }