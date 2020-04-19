import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ServiceTaskService } from '../service/service-task.service';
import { ModeleTask } from '../modele/ModeleTask';
@Component({
  selector: 'app-pub-ressource',
  templateUrl: './pub-ressource.component.html',
  styleUrls: ['./pub-ressource.component.css']
})
export class PubRessourceComponent implements OnInit {

  public task: ModeleTask;
  constructor(private router: Router, private serviceTaskService: ServiceTaskService, public route: ActivatedRoute) {
    this.task = new ModeleTask(null, '', '', '', '');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const temp = this.serviceTaskService.getTaskById(params.id);
      console.log("type = "+temp.description)
      if (temp) {
        this.task.identifiant = temp.identifiant;
        this.task.description = temp.description;
      } else {
        this.router.navigate(['task']);
      }
    });
    /*  this.publicationService.getAllPublications()
                       .subscribe(publications=>this.publications=publications) ;
   */
  }

  retoure() {
    console.log(this.task);
    this.serviceTaskService.updateTaskDone(this.task);
    this.router.navigate(['task']);
  }
}
