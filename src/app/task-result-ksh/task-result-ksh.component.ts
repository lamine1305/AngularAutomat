import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceTaskService } from '../service/service-task.service';
import { ModeleTask } from '../modele/ModeleTask';
import { Router } from '@angular/router';
import { ModeleTaskResultSql } from 'src/app/modele/ModeleTaskResultSql';
@Component({
  selector: 'app-task-result-ksh',
  templateUrl: './task-result-ksh.component.html',
  styleUrls: ['./task-result-ksh.component.css']
})
export class TaskResultKshComponent implements OnInit {
  public taskResultKsh  :ModeleTaskResultSql;

  public task: ModeleTask;
  constructor(private router: Router, private serviceTaskService: ServiceTaskService, public route: ActivatedRoute) {
    this.task = new ModeleTask(null, '', '', '', '');
  }

  ngOnInit() {  }
}