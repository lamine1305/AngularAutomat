import { Component, OnInit } from '@angular/core';
import { ModeleTaskClean } from '../modele/ModeleTaskClean';
import { ServiceTaskService } from '../service/service-task.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-clean-test',
  templateUrl: './task-clean-test.component.html',
  styleUrls: ['./task-clean-test.component.css']
})
export class TaskCleanTestComponent implements OnInit {
  currentId : string ; 
  public taskClean  :ModeleTaskClean;
  constructor(private router: Router, private serviceTaskService: ServiceTaskService, public route: ActivatedRoute) {

  }
  ngOnInit() {
      this.taskClean = new ModeleTaskClean();
        this.route.params.subscribe(params => {
        this.currentId = params.id;
        const temp = this.serviceTaskService.getTaskCleanById( this.currentId);
  
        if (temp) {
          this.taskClean.identifiant = temp.identifiant;
          this.taskClean.afterBefore = temp.afterBefore;
          this.taskClean.repertoireClean = temp.repertoireClean;
          this.taskClean.requeteClean = temp.requeteClean;
          this.taskClean.instanceId = temp.instanceId;
        } else {
          this.router.navigate(['task']);
        }
      });
  
    }
  
    retour() {
      this.taskClean.identifiant = this.currentId;
      this.serviceTaskService.addTaskClean(this.taskClean);
      this.serviceTaskService.donneesXml =this.serviceTaskService.donneesXml
                                         +this.taskClean.toXML() ;
      this.router.navigate(['task']);
    }
  
    }
  
  