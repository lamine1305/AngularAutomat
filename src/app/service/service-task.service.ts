import { Injectable } from '@angular/core';
import { ModeleTask } from '../modele/ModeleTask';
import { ModeleTaskDescription } from '../modele/ModeleTaskDescription';
import { ModeleTaskClean } from '../modele/ModeleTaskClean';
import { ModeleTaskResultSql } from '../modele/ModeleTaskResultSql';
import { ModeleTaskFtp } from '../modele/ModeleTaskFtp';
import { ModeleTaskSql } from '../modele/modeleTaskSql';
import { ModeleTaskIhm } from '../modele/ModeleTaskIhm';
import { ModeleTaskJms } from '../modele/ModeleTasJms';
import { ModeleTaskKsh } from '../modele/ModeleTaskKsh';
import { ModeleTaskTnr } from '../modele/ModeleTaskTnr';
@Injectable({
  providedIn: 'root'
})
export class ServiceTaskService {
getTaskTypeById(taskId: string): "" {
        throw new Error("Method not implemented.");
    }
 // private donnesXml : ArrayList
public donneesXml:any="<planTest>"+'\n';
  private done: Array<ModeleTask>;
  private myTasksDescr: Array<ModeleTaskDescription>;
  private myTasksClean: Array<ModeleTaskClean>;
  private myTasksResultSql: Array<ModeleTaskResultSql>;
  private myTasksFtp: Array<ModeleTaskFtp>;
  private myTasksExecSql: Array<ModeleTaskSql>;
  private myTasksIhm: Array<ModeleTaskIhm>;
  private myTasksJms : Array<ModeleTaskJms>;
  private myTasksKsh : Array<ModeleTaskKsh>;
  private myTasksTnr  : Array<ModeleTaskTnr>;
  constructor() {
    this.done = [];
    this.myTasksDescr=new Array<ModeleTaskDescription>();
    this.myTasksClean=new Array<ModeleTaskClean>();
    this.myTasksResultSql=new Array<ModeleTaskResultSql>();
    this.myTasksFtp = new Array<ModeleTaskFtp>();
    this.myTasksExecSql = new Array<ModeleTaskSql>();
    this.myTasksIhm = new Array<ModeleTaskIhm>();
    this.myTasksJms = new Array<ModeleTaskJms>();
    this.myTasksKsh = new Array<ModeleTaskKsh>();
    this.myTasksTnr=new Array<ModeleTaskTnr>();
  }

  addTaskDone(myTask: any) {
    this.done.push(myTask);
  }
 
  
  //Permet d'ajouter n'importe quel task dans le tableau
  addTasks(ts: any) {
    this.myTasksDescr.push(ts);
  }
  updateTaskDone(myTask: ModeleTask) {
    const task: ModeleTask = this.done.find(elem => elem.identifiant === myTask.identifiant);
    task.description = myTask.description;
  }

  getTasksDone() {
    return this.done;
  }



  getTaskIhmById(id: string):ModeleTaskIhm {
    let task:ModeleTaskIhm= new ModeleTaskIhm();
    for(let ts of this.myTasksIhm )
    {
    if(ts.instanceId ==id || ts.identifiant ==id )
    {
      task.instanceId=ts.instanceId;
      task.descr = ts.descr;
      task.env = ts.env;
      task.commande= ts.commande;
      task.jddIhm= ts.jddIhm;

    }
  }
  return task;
  }
  
  
  getTaskTnrById(id: string):ModeleTaskTnr {
    let task:ModeleTaskTnr= new ModeleTaskTnr();
    for(let ts of this.myTasksTnr )
    {
    if(ts.instanceId ==id || ts.identifiant ==id )
    {
      task.instanceId=ts.instanceId;
      task.ajoutTnr = ts.ajoutTnr;

    }
  }
return task;
  }

  getTaskKshById(id: string):ModeleTaskKsh {
    let task:ModeleTaskKsh= new ModeleTaskKsh();
    for(let ts of this.myTasksKsh )
    {
    if(ts.instanceId ==id || ts.identifiant ==id )
    {
      task.instanceId = ts.instanceId;
      task.commandeksh = ts.commandeksh;
      task.tempoAvant = ts.tempoAvant;
      task.tempoApres = ts.tempoApres;

    }
  }
    return task;
  }
 

 getTaskDescrById(id: string):ModeleTaskDescription {
 let task:ModeleTaskDescription= new ModeleTaskDescription();
  //let task= new ModeleTaskDescription();
  for(let ts of this.myTasksDescr )
  {
  if(ts.instanceId ==id || ts.identifiant ==id )
  {
    task.instanceId=ts.instanceId;
    task.nomTest = ts.nomTest;
    task.fluxStm = ts.fluxStm;
    task.env = ts.env;
    task.separateur=ts.separateur;
    task.typeTest=ts.typeTest;
    task.repertoireResult =ts.repertoireResult;
    task.formatDate = ts.formatDate;
    task.formatDateHeure = ts.formatDateHeure;
  }
}
  return task;
}



getTaskExecSqlById(id: string):ModeleTaskSql {
  let task:ModeleTaskSql= new ModeleTaskSql();
   //let task= new ModeleTaskDescription();
   for(let ts of this.myTasksExecSql )
   {
   if(ts.instanceId ==id || ts.identifiant ==id )
   {
     task.instanceId=ts.instanceId;
     task.requete = ts.requete;
   }
 }
   return task;
 }

getTaskFtpById(id: string):ModeleTaskFtp {
  let task:ModeleTaskFtp= new ModeleTaskFtp();
   //let task= new ModeleTaskDescription();
   for(let ts of this.myTasksFtp )
   {
   if(ts.instanceId ==id || ts.identifiant ==id )
   {
     task.instanceId=ts.instanceId;
     task.destination = ts.destination;
     task.type = ts.type;
     task.origine = ts.origine;
   }
 }
   return task;
 }

getTaskCleanById(id: string):ModeleTaskClean {
  let task:ModeleTaskClean= new ModeleTaskClean();
   //let task= new ModeleTaskDescription();
   for(let ts of this.myTasksClean )
   {
   if(ts.instanceId ==id || ts.identifiant ==id )
   {
     task.instanceId=ts.instanceId;
     task.afterBefore = ts.afterBefore;
     task.requeteClean = ts.requeteClean;
     task.repertoireClean = ts.repertoireClean;
   }
 }
   return task;
 }

getTaskResultSqlById(id: string):ModeleTaskResultSql {
  let task:ModeleTaskResultSql= new ModeleTaskResultSql();
   //let task= new ModeleTaskDescription();
   for(let ts of this.myTasksResultSql )
   {
   if(ts.instanceId ==id || ts.identifiant ==id )
   {
    task.identifiant = ts.identifiant ;   
    task.instanceId =ts.instanceId;
    task.eneteFile=ts.eneteFile ;
    task.nomFichierRepert= ts.nomFichierRepert;
    task.preRequete =ts.preRequete
    task.requeteFichier =ts.requeteFichier;
    task.fichierGenere =ts.fichierGenere;
    task.fichierAttendu=ts.fichierAttendu ;
   }
 }
   return task;
 }


 
getTaskJmsById(id: string):ModeleTaskJms {
  let task:ModeleTaskJms= new ModeleTaskJms();
   //let task= new ModeleTaskDescription();
   for(let ts of this.myTasksJms)
   {
   if(ts.instanceId ==id || ts.identifiant ==id )
   {
    task.identifiant = ts.identifiant ;   
    task.instanceId =ts.instanceId;
    task.nomFileJms=ts.nomFileJms ;
    task.nomFichier= ts.nomFichier;

   }
 }
   return task;
 }

 addTaskEexecSql(task :ModeleTaskSql )
 {
   this.myTasksExecSql.push(task);
 }
 addTaskIhm(task :ModeleTaskIhm )
 {
   this.myTasksIhm.push(task);
 }
 addTaskTnr(task :ModeleTaskTnr )
 {
   this.myTasksTnr.push(task);
 }
addTaskDescr(task :ModeleTaskDescription )
{
  this.myTasksDescr.push(task);
}
addTaskFtp(task :ModeleTaskFtp )
{
  this.myTasksFtp.push(task);
}
addTaskClean(task :ModeleTaskClean )
{
  this.myTasksClean.push(task);
}
addTaskKsh(task :ModeleTaskKsh )
{
  this.myTasksKsh.push(task);
}
addTaskJms(task :ModeleTaskJms )
{
  this.myTasksJms.push(task);
}

addTaskResultSql(task :ModeleTaskResultSql )
{
  this.myTasksResultSql.push(task);
}

addTaskExecSql(task :ModeleTaskSql )
{
  this.myTasksExecSql.push(task);
}

getTaskById(id: string):ModeleTask {
    console.log(this.done);
    const task: ModeleTask = this.done.find(elem => elem.instanceId == id);
    return task ? task : null;
  }

  whrietFileXml()
  {
    var dt=new Date();
    var dtcomplete = dt.getDate().toString()+(1+dt.getMonth()).toString()+dt.getFullYear().toString()+dt.getHours().toString()+dt.getMinutes().toString()+dt.getSeconds().toString();
    var fileContents = this.donneesXml+`\n`+'</planTest>';
    var filename = "scenario_"+dtcomplete;
    var filetype = "text/xml";
    var dataURI='';
    var a = document.createElement("a");
    dataURI = "data:" + filetype +";base64," + btoa(fileContents);
    a.href = dataURI;
    a['download'] = filename;
    var e = document.createEvent("MouseEvents");
    // Use of deprecated function to satisfy TypeScript.
    e.initMouseEvent("click", true, false, document.defaultView, 0, 0, 0, 0, 0,false, false, false, false, 0, null);
    a.dispatchEvent(e);
    //a.removeNode();
  }

}
