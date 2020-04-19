import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceTaskService } from '../service/service-task.service';
import { Router } from '@angular/router';
import { ModeleTaskKsh } from '../modele/ModeleTaskKsh';
@Component({
  selector: 'app-task-ksh',
  templateUrl: './task-ksh.component.html',
  styleUrls: ['./task-ksh.component.css']
})
export class TaskKshComponent implements OnInit {
  public taskKsh  :ModeleTaskKsh;


currentId : string ; 
//separateur : String;
  constructor(private router: Router, private serviceTaskService: ServiceTaskService, public route: ActivatedRoute) {
 }

  ngOnInit() {
    this.taskKsh = new ModeleTaskKsh();
      this.route.params.subscribe(params => {
      this.currentId = params.id;
      const temp = this.serviceTaskService.getTaskKshById( this.currentId);

      if (temp) {        
        this.taskKsh.identifiant = temp.identifiant;
        this.taskKsh.tempoApres = temp.tempoApres;
        this.taskKsh.tempoAvant = temp.tempoAvant;
        this.taskKsh.commandeksh = temp.commandeksh;
      } else {
        this.router.navigate(['task']);
      }
    });

  }

  retour() {
    this.taskKsh.identifiant = this.currentId;
    console.log(this.taskKsh);
    this.serviceTaskService.addTaskKsh(this.taskKsh);
    this.serviceTaskService.donneesXml =this.serviceTaskService.donneesXml
                                       +this.taskKsh.toXML() ;
    this.router.navigate(['task']);
  }

  }

