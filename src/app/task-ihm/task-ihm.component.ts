import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModeleTask } from "../modele/ModeleTask";
import { ServiceTaskService } from '../service/service-task.service';
import { ModeleTaskIhm } from '../modele/ModeleTaskIhm';

@Component({
  selector: 'app-task-ihm',
  templateUrl: './task-ihm.component.html',
  styleUrls: ['./task-ihm.component.css']
})
export class TaskIhmComponent implements OnInit {
  
currentId : string ; 
//separateur : String;
  public taskIhm  :ModeleTaskIhm;
  constructor(private router: Router, private serviceTaskService: ServiceTaskService, public route: ActivatedRoute) {
 }

  ngOnInit() {
    this.taskIhm = new ModeleTaskIhm();
      this.route.params.subscribe(params => {
      this.currentId = params.id;
      const temp = this.serviceTaskService.getTaskIhmById( this.currentId);

      if (temp) {
        this.taskIhm.identifiant = temp.identifiant;
        this.taskIhm.descr = temp.descr;
        this.taskIhm.env = temp.env;
        this.taskIhm.commande = temp.commande;
        this.taskIhm.jddIhm = temp.jddIhm;
       } else {
        this.router.navigate(['task']);
      }
    });

  }

  retour() {
    this.taskIhm.identifiant = this.currentId;
    console.log(this.taskIhm);
    this.serviceTaskService.addTaskIhm(this.taskIhm);
    this.serviceTaskService.donneesXml =this.serviceTaskService.donneesXml
                                       +this.taskIhm.toXML() ;
    this.router.navigate(['task']);
  }

  }


