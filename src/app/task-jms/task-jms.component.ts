import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {ServiceTaskService} from '../service/service-task.service';
import { ModeleTaskJms } from '../modele/ModeleTasJms';

@Component({
  selector: 'app-task-jms',
  templateUrl: './task-jms.component.html',
  styleUrls: ['./task-jms.component.css']
})
export class TaskJmsComponent implements OnInit {
  currentId : string ; 
  //separateur : String;
    public taskJms  :ModeleTaskJms;
constructor(private router: Router, private serviceTaskService: ServiceTaskService, public route: ActivatedRoute) {
}

 ngOnInit() {
   this.taskJms = new ModeleTaskJms();
     this.route.params.subscribe(params => {
     this.currentId = params.id;
     const temp = this.serviceTaskService.getTaskJmsById( this.currentId);
     // alert(temp.nomFichier);
     if (temp) {
     // alert(temp.nomFichier);
       this.taskJms.identifiant = temp.identifiant;
       this.taskJms.nomFileJms = temp.nomFileJms;
       this.taskJms.nomFichier = temp.nomFichier;

      } else {
       this.router.navigate(['task']);
     }
   });

 }

 retour() {
   this.taskJms.identifiant = this.currentId;
   console.log(this.taskJms);
   this.serviceTaskService.addTaskJms(this.taskJms);
   this.serviceTaskService.donneesXml =this.serviceTaskService.donneesXml
                                      +this.taskJms.toXML() ;
   this.router.navigate(['task']);
 }

 }
