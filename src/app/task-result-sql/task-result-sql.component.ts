import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModeleTaskResultSql } from '../modele/ModeleTaskResultSql';
import { ModeleTask } from "../modele/ModeleTask";
import { ServiceTaskService } from '../service/service-task.service';

@Component({
  selector: 'app-task-result-sql',
  templateUrl: './task-result-sql.component.html',
  styleUrls: ['./task-result-sql.component.css']
})
export class TaskResultSqlComponent implements OnInit {
  public taskResultSql  :ModeleTaskResultSql;
  currentId : string ; 

  public task: ModeleTask;
  constructor(private router: Router, private serviceTaskService: ServiceTaskService, public route: ActivatedRoute) {
    this.taskResultSql = new ModeleTaskResultSql();
  }

  ngOnInit() {
    this.taskResultSql = new ModeleTaskResultSql();
      this.route.params.subscribe(params => {
      this.currentId = params.id;
      const temp = this.serviceTaskService.getTaskResultSqlById( this.currentId);

      if (temp) {
       this.taskResultSql.identifiant = temp.identifiant  ;   
       this.taskResultSql.instanceId =temp.instanceId ;
       this.taskResultSql.eneteFile =temp.eneteFile ;
       this.taskResultSql.nomFichierRepert=temp.nomFichierRepert ;
       this.taskResultSql.preRequete =temp.preRequete
       this.taskResultSql.requeteFichier =temp.requeteFichier;
       this.taskResultSql.fichierGenere =temp.fichierGenere ;
       this.taskResultSql.fichierAttendu =temp.fichierAttendu;
       // this.separateur=temp.separateur;
      } else {
        this.router.navigate(['task']);
      }
    });

  }

  retour() {
    this.taskResultSql.identifiant = this.currentId;
    console.log(this.taskResultSql);
    this.serviceTaskService.addTaskResultSql(this.taskResultSql);
    this.serviceTaskService.donneesXml =this.serviceTaskService.donneesXml
                                       +this.taskResultSql.toXML() ;
    this.router.navigate(['task']);
  }

  }

