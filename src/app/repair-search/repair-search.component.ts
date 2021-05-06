import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {REPAIRS} from '../mock-data';
import {Repair} from '../model/repair';

@Component({
  selector: 'app-repair-search',
  templateUrl: './repair-search.component.html',
  styleUrls: ['./repair-search.component.css']
})
export class RepairSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
repairs: Repair[] = REPAIRS;
  selectedRepair: Repair;
  form: FormGroup;
  searchText: string;

  RID: number;
  DID: number;
  issue: string;
  fix: string;
  status: string;

  deleteRepair(repair: Repair){
       this.repairs.splice(this.repairs.indexOf(repair),1)
  }
  

  editRepair(repair: Repair) {
    this.selectedRepair = repair;
    this.form = new FormGroup({
      RID: new FormControl(repair.RID),
      DID: new FormControl(repair.DID),
      issue: new FormControl(repair.issue),
      fix: new FormControl(repair.fix),
      status: new FormControl(repair.status),

    });
      
  }

 save() {
    this.selectedRepair.RID= this.form.value.RID,
    this.selectedRepair.DID= this.form.value.DID,
    this.selectedRepair.issue= this.form.value.issue;
    this.selectedRepair.fix= this.form.value.fix;
    this.selectedRepair.status= this.form.value.status;
    this.cancel();
  }

  cancel() {
    this.selectedRepair = null;
    this.form = null;
  }


}