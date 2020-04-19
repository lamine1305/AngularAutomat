import { Component, OnInit } from '@angular/core';
import { ModeleTask } from '../modele/ModeleTask';
import { ServiceTaskService } from '../service/service-task.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModeleTaskFtp } from '../modele/ModeleTaskFtp';

@Component({
  selector: 'app-task-ftp',
  templateUrl: './task-ftp.component.html',
  styleUrls: ['./task-ftp.component.css']
})
export class TaskFtpComponent implements OnInit {

  

  public task: ModeleTask;
  currentId : string ; 

  public taskFtp  :ModeleTaskFtp;
  constructor(private router: Router, private serviceTaskService: ServiceTaskService, public route: ActivatedRoute) {
   // this.task = new ModeleTask(null, '', '', '', '');
  }

  ngOnInit() {
    this.taskFtp = new ModeleTaskFtp();
      this.route.params.subscribe(params => {
      this.currentId = params.id;
      const temp = this.serviceTaskService.getTaskFtpById( this.currentId);

      if (temp) {
        
        this.taskFtp.identifiant = temp.identifiant;
        this.taskFtp.instanceId = temp.instanceId;
        this.taskFtp.destination = temp.destination;
        this.taskFtp.type = temp.type;
        this.taskFtp.origine = temp.origine;
        
       // this.separateur=temp.separateur;
      } else {
        this.router.navigate(['task']);
      }
    });

  }

  retour() {
    this.taskFtp.identifiant = this.currentId;
    console.log(this.taskFtp);
    this.serviceTaskService.addTaskFtp(this.taskFtp);
    this.serviceTaskService.donneesXml =this.serviceTaskService.donneesXml
                                       +this.taskFtp.toXML() ;
    this.router.navigate(['task']);
  }

  }

