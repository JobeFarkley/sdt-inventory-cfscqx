import { Component, OnInit } from '@angular/core';
import {DEVICES} from '../mock-data';
import {Device} from '../model/device';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css']
})
export class InventoryDetailsComponent implements OnInit {

 devices: Device[] = DEVICES;

 DID: number;
 deviceName : string;
 AssignnedUID: string;
  selectedDevice: Device;
  form: FormGroup;
  searchText: string;
  
  constructor() { }

  ngOnInit() {
  }

  requestDevice(device: Device){
      this.selectedDevice = device;
      this.form = new FormGroup({
      DID: new FormControl(device.DID),
      deviceName: new FormControl(device.deviceName),
      assignedUID: new FormControl(device.assignedUID),

    });
  }
   save() {
    this.selectedDevice.DID= this.form.value.DID;
    this.selectedDevice.deviceName= this.form.value.deviceName;
    this.selectedDevice.assignedUID= this.form.value.assignedUID;
    this.cancel();
  }

  cancel() {
    this.selectedDevice = null;
    this.form = null;
  }
}