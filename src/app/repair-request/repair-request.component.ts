import { Component, OnInit } from '@angular/core';
import {REPAIRS} from '../mock-data';
import {Repair} from '../model/repair';

@Component({
  selector: 'app-repair-request',
  templateUrl: './repair-request.component.html',
  styleUrls: ['./repair-request.component.css']
})
export class RepairRequestComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
  }

  repairs: Repair[] = REPAIRS;
  RID: number = 56888;
  DID: number;
  issue: string;
  fix: string = "";
  status: string = "";
  


  addRepair(){
    const newRepair: Repair = {
      RID: ++this.RID,
      DID: this.DID,
      issue: this.issue,
      fix: this.fix,
      status: this.status
    }
    this.repairs.push(newRepair);
  }

}
