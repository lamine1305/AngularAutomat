import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

import { Router } from '@angular/router';
import { ServiceTaskService } from '../service/service-task.service';
import { ModeleTask } from '../modele/ModeleTask';
import { ModeleTaskDescription } from '../modele/ModeleTaskDescription';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  private done: ModeleTask[] = [];
  private todo: ModeleTask[];
  private todoInit: ModeleTask[];
  private tsk:ModeleTask;
  private modeleTask:ModeleTask;
  private  mdDescr :ModeleTaskDescription;
  constructor(private router: Router, private serviceTask: ServiceTaskService) {
    this.done = [];
    this.todo = [];
    this.todoInit = [];
  }


  ngOnInit() {
    this.tsk = new ModeleTask('','','','','');
    //-- NEW ---//
    this.todo = [];
    this.modeleTask = new ModeleTask('1', 'Scénario de test', 'scenario', 'scenario', 'fa fa-info-circle fa-1x'),
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('2', 'Description du test', 'description-du-test', 'description-du-test', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('3', 'Jeu de données', 'jdd', 'jdd', 'fa fa-database fa-1x');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('4', 'Fichier FTP', 'execution-ftp', 'jdd-fichier', '');
    this.todo.push(this.modeleTask);
    this.modeleTask = new ModeleTask('5a', 'Fichier SQL', 'jdd-sqlFile', 'jdd-sqlFile', '');
    this.todo.push(this.modeleTask);
    this.modeleTask = new ModeleTask('5', 'Requete SQL', 'jdd-sql', 'jdd-sql', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('6', 'Exécution du test', 'execution-du-test', 'execution-du-test', 'fa fa-sync fa-spin fa-1x');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('7', 'IHM', 'execution-ihm', 'execution-ihm', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('8', 'Ksh', 'execution-ksh', 'execution-ksh', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('9', 'Requete SQL', 'execution-sql', 'execution-sql', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('10', 'File JMS', 'execution-jms', 'execution-jms', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('11', 'Résultats attendus', 'resultats', 'resultats', 'fa fa-thumbs-up fa-1x');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('12', 'Fichier', 'resultats-fichier', 'resultats-fichier', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('13', 'Ksh', 'resultats-ksh', 'resultats-ksh', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('14', 'Requete SQL', 'resultats-sql', 'resultats-sql', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('15', 'Rapports', 'rapports', 'rapports', 'fa fa-bar-chart fa-1x');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('16', 'Excel', 'rapports-excel', 'rapports-excel', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('17', 'PDF', 'rapports-pdf', 'rapports-pdf', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('18', 'Texte', 'rapports-texte', 'rapports-texte', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('19', 'Outils', 'outils', 'outils', 'fa fa-wrench fa-1x');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('20', '', 'outils-lien', 'outils-lien', 'fa fa-arrow-down fa-lg');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('21', 'Temporisation', 'outils-tempo', 'outils-tempo', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('22', 'Insertion TNR', 'outils-tnr', 'outils-tnr', '');
    this.todo.push(this.modeleTask);

    this.modeleTask = new ModeleTask('23', 'clean-test', 'clean-test', 'clean-test', 'fa fa-check-square fa-1x');

    for (let it of this.todo) {
      it.identifiant = Math.floor(Math.random() * Math.floor(5000)).toString();
      this.todoInit.push(it);
    }
    this.done = this.serviceTask.getTasksDone();
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousIndex==0
      || event.previousIndex==2
      || event.previousIndex==6
      || event.previousIndex==11
      || event.previousIndex==15
      || event.previousIndex==19
      || event.previousIndex==24
      ) {
                return;
     };

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log( 'nbr ' + event.previousContainer.data.length);
      let v1 = <Object>event.previousContainer.data as ModeleTask[];
      let mod: ModeleTask;

      console.log( 'event.currentIndex ' + event.currentIndex);
      console.log( 'event.previousIndex ' + event.previousIndex);
      switch(event.previousIndex) { 
      case 1: {
        mod = new ModeleTask('2', 'Description du test', 'description-du-test', 'description-du-test', '');
        break; 
      }
      case 3: {
        mod = new ModeleTask('4', 'Fichier FTP', 'execution-ftp', 'jdd-fichier', '');
        break; 
      }
      case 4: {
        mod = new ModeleTask('4', 'Fichier SQL', 'execution-sqlFile', 'jdd-sqlFile', '');
        break; 
      }
      case 5: {
        mod = new ModeleTask('5', 'Requete SQL', 'jdd-sql', 'jdd-sql', '');
        break; 
      }
      case 7: {
        mod = new ModeleTask('7', 'IHM', 'execution-ihm', 'execution-ihm', '');

        break; 
      }
      case 8: {
        mod = new ModeleTask('8', 'Ksh', 'execution-ksh', 'execution-ksh', '');
        break; 
      }
      case 9: {
        mod = new ModeleTask('9', 'Requete SQL', 'execution-sql', 'execution-sql', '');
        break; 
      }
      case 10: {
        mod = new ModeleTask('10', 'File JMS', 'execution-jms', 'execution-jms', '');
        break; 
      }
      case 12: {
        mod = new ModeleTask('12', 'Fichier', 'resultats-fichier', 'resultats-fichier', '');
        break; 
      }
      case 13: {
        mod = new ModeleTask('13', 'Ksh', 'resultats-ksh', 'resultats-ksh', '');
        break; 
      }
      case 14: {
        mod = new ModeleTask('14', 'Requete SQL', 'resultats-sql', 'resultats-sql', '');
        break; 
      }
      case 16: {
        mod = new ModeleTask('16', 'Excel', 'rapports-excel', 'rapports-excel', '');
        break; 
      }
      case 17: {
        mod = new ModeleTask('17', 'PDF', 'rapports-pdf', 'rapports-pdf', '');
        break; 
      }
      case 18: {
        mod = new ModeleTask('18', 'Texte', 'rapports-texte', 'rapports-texte', '');
        break; 
      }
      case 20: {
        mod =new ModeleTask('20', '', 'outils-lien', 'outils-lien', 'fa fa-arrow-down fa-lg');
        break; 
      }
      case 21: {
        mod = new ModeleTask('21', 'Temporisation', 'outils-tempo', 'outils-tempo', '');
        break; 
      }
      case 22: {
        mod = new ModeleTask('22', 'Insertion TNR', 'outils-tnr', 'outils-tnr', '');
        break; 
      }
      case 23: {
        mod = new ModeleTask('23', 'clean-test', 'clean-test', 'clean-test', 'fa fa-check-square fa-1x');
        break; 
      }
    }
      if( v1) {
        v1[v1.length] = mod;
      }

     transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        this.todo = [];
        let i =Math.floor(Math.random() * Math.floor(5000)).toString();

        let index =event.currentIndex;
         console.log('index= '+index +" i= "+i);
         let v: ModeleTask;
        // event.container.data[index].instanceId = i;
         (<Object>event.container.data[index] as ModeleTask).instanceId=i;
         console.log( event.container.data);
     }
  }


  setDetail(taskId: string) {
    this.tsk = this.serviceTask.getTaskById(taskId);
    console.log("this.tsk"+this.tsk.instanceId);
    alert("this.type"+this.tsk.type);
     switch(this.tsk.type) { 
      case 'description-du-test': { 
        this.mdDescr=this.serviceTask.getTaskDescrById(taskId);
        this.router.navigate(['task/ressourceDescription', taskId]);
       // console.log(this.done);
        break; 
      } 
      case 'execution-ihm': { 
        this.router.navigate(['task/ihm', taskId]);
        break; 
      } 
      case 'execution-sql': { 
        this.router.navigate(['task/sql', taskId]);
        break; 
      }
      case 'execution-ksh': { 
        this.router.navigate(['task/ksh', taskId]);
        break; 
      } 
      case 'resultats-sql': { 
        this.router.navigate(['task/sqlResult', taskId]);
        break; 
      } 
      case 'resultats-ksh': { 
        this.router.navigate(['task/kshResult', taskId]);
        break; 
      } 
      case 'execution-ftp': { 
        this.router.navigate(['task/ftp', taskId]);
        break; 
      } 
      case 'clean-test': { 
        this.router.navigate(['task/clean', taskId]);
        break; 
      } 
      case 'execution-jms': { 
        this.router.navigate(['task/jms', taskId]);
        break; 
      }
      case 'outils-tempo': { 
        this.router.navigate(['task/tempo', taskId]);
        break; 
      }  
      case 'outils-tnr': { 
        this.router.navigate(['task/tnr', taskId]);
        break; 
      }  
      case 'jdd-sql': { 
        this.router.navigate(['task/sql', taskId]);
        break; 
      }  
}
  }
generateFile()
{
  this.serviceTask.whrietFileXml();
}
  
}
