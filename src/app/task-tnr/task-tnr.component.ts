import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModeleTask } from '../modele/ModeleTask';
import { ServiceTaskService } from '../service/service-task.service';
import { ModeleTaskTnr } from '../modele/ModeleTaskTnr';

@Component({
  selector: 'app-task-tnr',
  templateUrl: './task-tnr.component.html',
  styleUrls: ['./task-tnr.component.css']
})
export class TaskTnrComponent implements OnInit {
  
currentId : string ; 
  public taskTnr  :ModeleTaskTnr;
  constructor(private router: Router, private serviceTaskService: ServiceTaskService, public route: ActivatedRoute) {
 }

  ngOnInit() {
    this.taskTnr = new ModeleTaskTnr();
      this.route.params.subscribe(params => {
      this.currentId = params.id;
      const temp = this.serviceTaskService.getTaskTnrById( this.currentId);

      if (temp) {
        
        this.taskTnr.identifiant = temp.identifiant;
        this.taskTnr.ajoutTnr = temp.ajoutTnr;
      } else {
        this.router.navigate(['task']);
      }
    });

  }

  retour() {
    this.taskTnr.identifiant = this.currentId;
    console.log(this.taskTnr);
    this.serviceTaskService.addTaskTnr(this.taskTnr);
    this.serviceTaskService.donneesXml =this.serviceTaskService.donneesXml
                                       +this.taskTnr.toXML() ;
    this.router.navigate(['task']);
  }

  }




