import { Component, OnInit } from '@angular/core';
import { ServiceTaskService } from '../service/service-task.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModeleTaskDescription } from '../modele/ModeleTaskDescription';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.css']
})
export class TaskDescriptionComponent implements OnInit {

currentId : string ; 
//separateur : String;
  public taskDesc  :ModeleTaskDescription;
  constructor(private router: Router, private serviceTaskService: ServiceTaskService, public route: ActivatedRoute) {
 }

  ngOnInit() {
    this.taskDesc = new ModeleTaskDescription();
      this.route.params.subscribe(params => {
      this.currentId = params.id;
      const temp = this.serviceTaskService.getTaskDescrById( this.currentId);

      if (temp) {
        console.log("temp  "+temp.formatDateHeure);

       // alert("nomTest="+ temp.nomTest);
        
        this.taskDesc.identifiant = temp.identifiant;
        this.taskDesc.nomTest = temp.nomTest;
        this.taskDesc.fluxStm = temp.fluxStm;
        this.taskDesc.formatDateHeure = temp.formatDateHeure;
        this.taskDesc.formatDate = temp.formatDate;
        this.taskDesc.repertoireResult = temp.repertoireResult;
        this.taskDesc.separateur = temp.separateur;
        this.taskDesc.env = temp.env;
        this.taskDesc.typeTest = temp.typeTest;
       // this.separateur=temp.separateur;
      } else {
        this.router.navigate(['task']);
      }
    });

  }

  retour() {
    this.taskDesc.identifiant = this.currentId;
    console.log(this.taskDesc);
    this.serviceTaskService.addTaskDescr(this.taskDesc);
    this.serviceTaskService.donneesXml =this.serviceTaskService.donneesXml
                                       +this.taskDesc.toXML() ;
    this.router.navigate(['task']);
  }

  }

