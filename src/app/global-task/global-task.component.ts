import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUISelectionMode } from '@lidorsystems/integralui-web/bin/integralui/components/integralui.core';
import { Router } from '@angular/router';
import { ServiceTaskService } from '../service/service-task.service';

@Component({
  selector: 'global-Taskp',
  templateUrl: './global-task.component.html',
  styleUrls: [ './global-task.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class GlobalTaskComponent {
   // @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    public items: Array<any>;
    public cloneItems: Array<any>;
    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;

    public listStyle: any = {
        general: {
            normal: 'lbox-dd-copy-normal'
        }
    }

    public cloneListStyle: any = {
        general: {
            normal: 'lbox-dd-copy-list'
        }
    }

    public itemStyle: any = {
        general: {
            normal: 'lbox-dd-copy-item-normal'
        }
    }

    public lboxOverviewRatingStyleStars: any = {
        general: { normal: 'lbox-dd-copy-rating' },
        content: { normal: 'lbox-dd-copy-rating-stars-content'}
    }
    constructor(private router: Router, private serviceTask: ServiceTaskService) {

        this.items = [
            { id: 1, icon: "fa fa-info-circle fa-1x", text: "Scénario de test", classe: "scenario" },
            { id: 2, icon: "", text: "Description du test", classe: "description-du-test" },
            { id: 3, icon: "fa fa-database fa-1x", text: "Jeu de données ", classe: "jdd" },
            { id: 4, icon: "", text: "Fichier FTP", classe: "execution-ftp" },
            { id: 5, icon: "", text: "Requete SQL", classe: "jdd-sql" },
            { id: 6, icon: "fa fa-sync fa-spin fa-1x", text: "Exécution du test", classe: "execution-du-test"  },
            { id: 7, icon: "", text: "IHM", classe: "execution-ihm"  },
            { id: 8, icon: "", text: "Ksh", classe: "execution-ksh" },
            { id: 9, icon: "", text: "Requete SQL", classe: "execution-sql"  },
            { id: 10, icon: "", text: "File JMS", classe: "execution-jms" },
            { id: 11, icon: "fa fa-thumbs-up fa-1x'", text: "Résultats attendus", classe: "resultats" },
            { id: 12, icon: "", text: "Fichier", classe: "resultats-fichier" },
            { id: 13, icon: "", text: "Ksh", classe: "resultats-ksh" },
            { id: 14, icon: "", text: "Requete SQL", classe: "resultats-sql" },
            { id: 15, icon: "fa fa-bar-chart fa-1x", text: "Rapports", classe: "rapports"  },
            { id: 16, icon: "", text: "Excel", classe: "rapports-excel" },
            { id: 17, icon: "", text: "PDF", classe: "rapports-pdf"  },
            { id: 18, icon: "", text: "Texte", classe: "rapports-texte" },
            { id: 19, icon: "fa fa-wrench fa-1x", text: "Outils", classe: "outils" },
            { id: 20, icon: "fa fa-arrow-down fa-lg", text: "outils-lien", classe: "outils-lien" },
            { id: 21, icon: "", text: "Temporisation", classe: "outils-tempo" },
            { id: 22, icon: "", text: "Insertion TNR", classe: "outils-tnr" },
            { id: 23, icon: "fa fa-check-square fa-1x", text: "clean-test", classe: "clean-test" },
            { id: 24, icon: "fa fa-check-square fa-1x", text: "Validation", classe: "validation" }

        ];

        this.cloneItems = [];
    }   

    listDrop(e: any){
        // On COPY, clear the selected items in the left ListBox
        //if (e.action == 'copy' && e.sourceCtrl && e.sourceCtrl.clearSelection)
            //e.sourceCtrl.clearSelection();

        e.cancel = true;

        if (e.sourceCtrl && e.dragItem && Array.isArray(e.dragItem)){
            e.targetCtrl.suspendLayout();

            for (let i = 0; i < e.dragItem.length; i++){
                let clone = e.sourceCtrl.cloneItem(e.dragItem[i]);
                clone.id=Math.floor(Math.random() * Math.floor(5000)).toString();
                // Depending on drop position, place the clone item accordingly
                switch (e.dropPos){
                    case 1: // Above
                        e.targetCtrl.insertItemBefore(clone, e.targetItem);
                        break;

                    case 2: // Below
                        e.targetCtrl.insertItemAfter(clone, e.targetItem);
                        break;

                    default: // At the end
                        e.targetCtrl.addItem(clone);
                        break;
                }

            }

            e.targetCtrl.resumeLayout();
        }
    }

setDetail(taskId: string,texte:string) {
        switch(texte) { 
         case 'description-du-test': { 
            // this.mdDescr=this.serviceTask.getTaskDescrById(taskId);
           this.router.navigate(['globalTask/ressourceDescription', taskId]);
           break; 
         } 
         case 'execution-ihm': { 
           this.router.navigate(['globalTask/ihm', taskId]);
           break; 
         } 
         case 'execution-sql': { 
          this.router.navigate(['globalTask/sql', taskId]);
           break; 
         }
         case 'execution-ksh': { 
           this.router.navigate(['globalTask/ksh', taskId]);
           break; 
         } 
         case 'resultats-sql': { 
           this.router.navigate(['globalTask/sqlResult', taskId]);
           break; 
         } 
         case 'resultats-ksh': { 
           this.router.navigate(['globalTask/kshResult', taskId]);
           break; 
         } 
         case 'execution-ftp': { 
           this.router.navigate(['globalTask/ftp', taskId]);
           break; 
         } 
         case 'clean-test': { 
           this.router.navigate(['globalTask/clean', taskId]);
           break; 
         } 
         case 'execution-jms': { 
           this.router.navigate(['globalTask/jms', taskId]);
           break; 
         }
         case 'outils-tempo': { 
           this.router.navigate(['globalTask/tempo', taskId]);
           break; 
         }  
         case 'outils-tnr': { 
           this.router.navigate(['globalTask/tnr', taskId]);
           break; 
         }  
   }
     }
   generateFile()
   {
     this.serviceTask.whrietFileXml();
   }
     
  }
